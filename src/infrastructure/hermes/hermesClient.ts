// [LAYER: INFRASTRUCTURE] Server-side adapter for Hermes' OpenAI-compatible chat API.
import type { ChatMessage, ClientChatMessage } from "@/src/domain/chat/types";
import { LAUNCHHIVE_SYSTEM_PROMPT } from "@/src/domain/launchhive/systemPrompt";
import { env } from "@/src/infrastructure/env";

export class HermesConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "HermesConfigurationError";
  }
}

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const getHermesConfig = () => {
  return {
    apiBaseUrl: trimTrailingSlash(env.HERMES_API_BASE_URL),
    apiKey: env.HERMES_API_KEY,
    model: env.HERMES_MODEL,
  };
};

export const createHermesChatCompletionStream = (messages: readonly ClientChatMessage[], systemPrompt?: string) => {
  const config = getHermesConfig();
  const requestMessages: ChatMessage[] = [
    { role: "system", content: systemPrompt || LAUNCHHIVE_SYSTEM_PROMPT },
    ...messages,
  ];

  return fetch(`${config.apiBaseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: config.model,
      stream: true,
      messages: requestMessages,
    }),
  });
};

export const createHermesChatCompletion = async (messages: readonly ClientChatMessage[], systemPrompt?: string) => {
  const config = getHermesConfig();
  const requestMessages: ChatMessage[] = [
    { role: "system", content: systemPrompt || LAUNCHHIVE_SYSTEM_PROMPT },
    ...messages,
  ];

  const res = await fetch(`${config.apiBaseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: config.model,
      stream: false,
      messages: requestMessages,
      response_format: { type: "json_object" }
    }),
  });

  if (!res.ok) {
    throw new Error(`Hermes API error: ${res.statusText}`);
  }

  const data = await res.json();
  return data.choices[0].message.content;
};