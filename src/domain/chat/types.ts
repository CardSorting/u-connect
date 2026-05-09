// [LAYER: DOMAIN] Pure chat contracts and validation rules shared by UI/Core/Infrastructure.
export type ChatRole = "system" | "user" | "assistant";
export type ClientChatRole = Exclude<ChatRole, "system">;

export type ChatMessage = Readonly<{
  role: ChatRole;
  content: string;
}>;

export type ClientChatMessage = Readonly<{
  role: ClientChatRole;
  content: string;
}>;

const CLIENT_ROLES: ReadonlySet<string> = new Set<ClientChatRole>(["user", "assistant"]);
const MAX_MESSAGE_LENGTH = 24_000;
const MAX_MESSAGES = 80;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isClientChatRole = (value: unknown): value is ClientChatRole =>
  typeof value === "string" && CLIENT_ROLES.has(value);

const isValidContent = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0 && value.length <= MAX_MESSAGE_LENGTH;

export const isClientChatMessage = (value: unknown): value is ClientChatMessage =>
  isRecord(value) && isClientChatRole(value.role) && isValidContent(value.content);

export const sanitizeClientMessages = (value: unknown): ClientChatMessage[] | null => {
  if (!Array.isArray(value) || value.length > MAX_MESSAGES) {
    return null;
  }

  if (!value.every(isClientChatMessage)) {
    return null;
  }

  return value.map((message) => ({
    role: message.role,
    content: message.content.trim(),
  }));
};