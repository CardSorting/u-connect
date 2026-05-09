// [LAYER: DOMAIN] Canonical LaunchHive persona taxonomy shared across seed, API, and UI layers.
export const PERSONA_TYPE = {
    OPERATOR: "operator",
    MENTOR: "mentor",
    SUBJECT_MATTER_EXPERT: "subject-matter expert",
    VENTURE: "venture",
    SERVICE_PROVIDER: "service provider",
} as const;

export type PersonaType = (typeof PERSONA_TYPE)[keyof typeof PERSONA_TYPE];

export const PERSONA_TYPES = Object.values(PERSONA_TYPE) as PersonaType[];

export const PERSONA_TYPE_LABELS: Record<PersonaType, string> = {
    [PERSONA_TYPE.OPERATOR]: PERSONA_TYPE.OPERATOR,
    [PERSONA_TYPE.MENTOR]: PERSONA_TYPE.MENTOR,
    [PERSONA_TYPE.SUBJECT_MATTER_EXPERT]: PERSONA_TYPE.SUBJECT_MATTER_EXPERT,
    [PERSONA_TYPE.VENTURE]: PERSONA_TYPE.VENTURE,
    [PERSONA_TYPE.SERVICE_PROVIDER]: PERSONA_TYPE.SERVICE_PROVIDER,
};

export const LEGACY_PERSONA_TYPE_MAP: Record<string, PersonaType> = {
    advisor: PERSONA_TYPE.MENTOR,
    executive: PERSONA_TYPE.OPERATOR,
    founder: PERSONA_TYPE.VENTURE,
    sme: PERSONA_TYPE.SUBJECT_MATTER_EXPERT,
    startup: PERSONA_TYPE.VENTURE,
    student: PERSONA_TYPE.SERVICE_PROVIDER,
    "subject matter expert": PERSONA_TYPE.SUBJECT_MATTER_EXPERT,
    uncategorized: PERSONA_TYPE.SERVICE_PROVIDER,
};

const PERSONA_TYPE_VALUES = new Set<string>(PERSONA_TYPES);

export function normalizePersonaType(value?: string | null): PersonaType | null {
    const normalized = value?.trim().toLowerCase();
    if (!normalized) return null;
    if (PERSONA_TYPE_VALUES.has(normalized)) return normalized as PersonaType;
    return LEGACY_PERSONA_TYPE_MAP[normalized] ?? null;
}

export function getPersonaTypeLabel(value?: string | null): string {
    const normalized = normalizePersonaType(value);
    return normalized ? PERSONA_TYPE_LABELS[normalized] : value?.trim() || "unknown";
}