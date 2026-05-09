/**
 * Affinity CRM API Integration
 * Implements integration with Affinity API v2 for LaunchHive Admin Management.
 */

const AFFINITY_API_URL = "https://api.affinity.co/v2";

export type AffinitySyncResult<T = unknown> =
  | { ok: true; skipped?: false; id?: number; data?: T }
  | { ok: false; skipped?: boolean; reason: string; status?: number };

export interface AffinityPersonPayload {
  first_name: string;
  last_name: string;
  emails: string[];
  organization_names?: string[];
  linkedin_url?: string;
  role_type?: string;
  tags?: string[];
}

export interface AffinityOpportunityPayload {
  name: string;
  list_id: number;
  person_ids: number[];
  organization_ids: number[];
  fields?: Record<string, string | number | boolean | string[] | null>;
}

export interface LaunchHiveIntakeHandoffPayload {
  user: {
    name: string;
    email: string;
    linkedinUrl?: string | null;
    roleType?: string | null;
  };
  intake?: {
    stageEvidence?: string;
    commercializationBlocker?: string;
    requestedOutcome?: string;
    readinessScore?: number;
    regulatoryExposure?: string[];
    missingInfoFlags?: string[];
  };
  conversationId: string;
}

/**
 * Ensures the required headers are present for Affinity v2
 */
function getAffinityHeaders(): HeadersInit | null {
  const apiKey = process.env.AFFINITY_API_KEY;
  if (!apiKey) {
    return null;
  }
  return {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
}

/**
 * Creates or updates a Person record in Affinity CRM
 */
export async function syncPersonaToAffinity(payload: AffinityPersonPayload): Promise<AffinitySyncResult> {
  const headers = getAffinityHeaders();
  if (!headers) {
    return { ok: false, skipped: true, reason: "AFFINITY_API_KEY is not configured" };
  }

  try {
    const response = await fetch(`${AFFINITY_API_URL}/persons`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        ...payload,
        tags: Array.from(new Set([...(payload.tags ?? []), "LaunchHive"])),
      }),
    });

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        reason: await response.text().catch(() => "Affinity person sync failed"),
      };
    }

    const data = await response.json();
    return { ok: true, id: data.id, data };
  } catch (error) {
    return {
      ok: false,
      reason: error instanceof Error ? error.message : "Affinity network error",
    };
  }
}

/**
 * Creates an Opportunity in a specific Affinity List when a Match is successful
 */
export async function createAffinityOpportunity(payload: AffinityOpportunityPayload): Promise<AffinitySyncResult> {
  const headers = getAffinityHeaders();
  if (!headers) {
    return { ok: false, skipped: true, reason: "AFFINITY_API_KEY is not configured" };
  }

  if (!payload.list_id) {
    return { ok: false, skipped: true, reason: "AFFINITY_DEAL_FLOW_LIST_ID is not configured" };
  }

  try {
    const response = await fetch(`${AFFINITY_API_URL}/list-entries`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        list_id: payload.list_id,
        entity_type: "opportunity",
        name: payload.name,
        person_ids: payload.person_ids,
        organization_ids: payload.organization_ids,
        fields: payload.fields,
      }),
    });

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        reason: await response.text().catch(() => "Affinity opportunity creation failed"),
      };
    }

    const data = await response.json();
    return { ok: true, id: data.id, data };
  } catch (error) {
    return {
      ok: false,
      reason: error instanceof Error ? error.message : "Affinity network error",
    };
  }
}

export async function handoffIntakeToAffinity(payload: LaunchHiveIntakeHandoffPayload): Promise<AffinitySyncResult> {
  const [firstName, ...lastNameParts] = payload.user.name.trim().split(/\s+/);
  const person = await syncPersonaToAffinity({
    first_name: firstName || "Unknown",
    last_name: lastNameParts.join(" ") || "User",
    emails: [payload.user.email],
    linkedin_url: payload.user.linkedinUrl ?? undefined,
    role_type: payload.user.roleType ?? undefined,
    tags: ["Intake", payload.intake?.stageEvidence ?? "Unstaged"],
  });

  if (!person.ok) return person;

  const listId = parseInt(process.env.AFFINITY_DEAL_FLOW_LIST_ID || "0", 10);
  return createAffinityOpportunity({
    name: `LaunchHive intake: ${payload.user.name}`,
    list_id: listId,
    person_ids: person.id ? [person.id] : [],
    organization_ids: [],
    fields: {
      conversationId: payload.conversationId,
      stageEvidence: payload.intake?.stageEvidence ?? null,
      commercializationBlocker: payload.intake?.commercializationBlocker ?? null,
      requestedOutcome: payload.intake?.requestedOutcome ?? null,
      readinessScore: payload.intake?.readinessScore ?? null,
      regulatoryExposure: payload.intake?.regulatoryExposure ?? [],
      missingInfoFlags: payload.intake?.missingInfoFlags ?? [],
    },
  });
}

/**
 * Used for "Dig Deeper" logic mapping.
 * Updates custom fields on an opportunity (e.g. TRL, Commercialization Blocker).
 */
export async function updateAffinityCustomField(listEntryId: number, fieldId: number, value: any): Promise<boolean> {
  const headers = getAffinityHeaders();
  if (!headers) return false;

  try {
    const response = await fetch(`${AFFINITY_API_URL}/field-values`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        entity_id: listEntryId,
        field_id: fieldId,
        value: value,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("[Affinity API] Failed to update custom field", error);
    return false;
  }
}
