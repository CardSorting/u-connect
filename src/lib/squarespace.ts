/**
 * Squarespace API Integration
 * Implements integration with Squarespace for contact lifecycle sync and webhook management.
 */

const SQUARESPACE_API_URL = "https://api.squarespace.com/1.0";

export type IntegrationResult<T = unknown> =
  | { ok: true; skipped?: false; id?: string; data?: T }
  | { ok: false; skipped?: boolean; reason: string; status?: number };

export interface SquarespaceContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  source?: "intake" | "match" | "newsletter" | "admin";
  tags?: string[];
  lifecycleStage?: "new_contact" | "intake_started" | "intake_verified" | "match_ready";
}

/**
 * Ensures the required headers are present for Squarespace API calls
 */
function getSquarespaceHeaders(): HeadersInit | null {
  const apiKey = process.env.SQUARESPACE_API_KEY;
  if (!apiKey) {
    return null;
  }
  return {
    "Authorization": `Bearer ${apiKey}`,
    "User-Agent": "LaunchHive-Admin/1.0",
    "Content-Type": "application/json",
  };
}

/**
 * Pushes a new user to the Squarespace Contacts database.
 * Used for centralizing marketing lists and newsletters.
 */
export async function syncUserToSquarespaceContacts(payload: SquarespaceContactPayload): Promise<IntegrationResult> {
  const headers = getSquarespaceHeaders();
  if (!headers) {
    return { ok: false, skipped: true, reason: "SQUARESPACE_API_KEY is not configured" };
  }

  try {
    const normalizedPayload = {
      ...payload,
      source: payload.source ?? "intake",
      tags: Array.from(new Set([...(payload.tags ?? []), "LaunchHive"])),
      lifecycleStage: payload.lifecycleStage ?? "intake_started",
    };

    const response = await fetch(`${SQUARESPACE_API_URL}/profiles`, {
      method: "POST",
      headers,
      body: JSON.stringify(normalizedPayload),
    });

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        reason: await response.text().catch(() => "Squarespace contact sync failed"),
      };
    }

    const data = await response.json();
    return { ok: true, id: data.id, data };
  } catch (error) {
    return {
      ok: false,
      reason: error instanceof Error ? error.message : "Squarespace network error",
    };
  }
}

export async function recordSquarespaceIntakeMilestone(payload: SquarespaceContactPayload) {
  return syncUserToSquarespaceContacts({
    ...payload,
    source: "intake",
    tags: [...(payload.tags ?? []), "Intake", payload.lifecycleStage ?? "intake_started"],
  });
}

/**
 * Handler for incoming Squarespace Webhooks.
 * e.g., A user buys a "Premium Match Pass" via Squarespace, updating their LaunchHive TrustTier.
 */
export async function handleSquarespaceWebhook(event: any) {
  // If event is an order.created event
  if (event.topic === "order.created") {
    const email = event.data?.customerEmail;
    if (email) {
      console.log(`[Squarespace Webhook] New order from ${email}. We should update their reputation profile.`);
      // Implement Prisma call to upgrade user TrustTier
    }
  }
}
