// [LAYER: PLUMBING] Stateless parser for OpenAI-compatible Server-Sent Event chat streams.
type OpenAIStreamChoice = Readonly<{
  delta?: Readonly<{
    content?: unknown;
  }>;
  message?: Readonly<{
    content?: unknown;
  }>;
}>;

type OpenAIStreamPayload = Readonly<{
  choices?: readonly OpenAIStreamChoice[];
}>;

export type StreamDeltaParseResult = Readonly<{
  content: string;
  remainder: string;
  done: boolean;
}>;

const isOpenAIStreamPayload = (value: unknown): value is OpenAIStreamPayload =>
  typeof value === "object" && value !== null;

const extractContent = (payload: OpenAIStreamPayload) => {
  if (!Array.isArray(payload.choices)) {
    return "";
  }

  return payload.choices
    .map((choice) => {
      const deltaContent = choice.delta?.content;
      const messageContent = choice.message?.content;

      if (typeof deltaContent === "string") {
        return deltaContent;
      }

      if (typeof messageContent === "string") {
        return messageContent;
      }

      return "";
    })
    .join("");
};

export const extractOpenAIStreamDeltas = (chunk: string): StreamDeltaParseResult => {
  const endsWithLineBreak = /\r?\n$/.test(chunk);
  const lines = chunk.split(/\r?\n/);
  const completeLines = endsWithLineBreak ? lines : lines.slice(0, -1);
  const remainder = endsWithLineBreak ? "" : lines[lines.length - 1] || "";
  let content = "";
  let done = false;

  for (const line of completeLines) {
    const trimmed = line.trim();

    if (!trimmed.startsWith("data:")) {
      continue;
    }

    const data = trimmed.slice("data:".length).trim();

    if (!data) {
      continue;
    }

    if (data === "[DONE]") {
      done = true;
      continue;
    }

    try {
      const parsed: unknown = JSON.parse(data);

      if (isOpenAIStreamPayload(parsed)) {
        content += extractContent(parsed);
      }
    } catch {
      continue;
    }
  }

  return { content, remainder, done };
};

export const readOpenAIStream = async (
  response: Response,
  onDelta: (content: string) => void
): Promise<string> => {
  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error("Response body is null");
  }

  const decoder = new TextDecoder();
  let fullContent = "";
  let remainder = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const result = extractOpenAIStreamDeltas(remainder + chunk);
      
      fullContent += result.content;
      remainder = result.remainder;
      
      if (result.content) {
        onDelta(result.content);
      }
      
      if (result.done) break;
    }
  } finally {
    reader.releaseLock();
  }

  return fullContent;
};