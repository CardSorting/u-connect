# Architecture Notes

## Request flow

```txt
User Browser
→ LaunchHive Next.js Frontend
→ /api/chat server-side proxy
→ Deployed Hermes Agent API Server
→ Hermes Agent response stream
→ LaunchHive Chat UI
```

## Hermes boundary

The frontend does not call Hermes directly. Browser code sends chat messages to `/api/chat`. The route delegates to `src/infrastructure/hermes/hermesClient.ts`, which constructs the OpenAI-compatible request and attaches the server-only bearer token from `HERMES_API_KEY`.

Required runtime variables:

```env
HERMES_API_BASE_URL=https://hermes.launchhive.ai/v1
HERMES_API_KEY=your-secure-hermes-api-key
HERMES_MODEL=hermes-agent
```

## Agent behavior contract

`src/domain/launchhive/systemPrompt.ts` defines LaunchHive as an AI commercialization matchmaking concierge for Utah's deep-tech startup ecosystem. The prompt requires plain-English intake, one question at a time, profile summarization, confirmation before recommendations, confidence levels when useful, and Utah-specific commercialization context.

## Streaming behavior

`app/chat/page.tsx` reads the response body stream returned by `/api/chat`. `src/utils/openAIStream.ts` parses OpenAI-compatible Server-Sent Event lines, extracts `choices[].delta.content` and fallback `choices[].message.content`, and appends deltas to the active assistant message.

## Security posture

- `HERMES_API_KEY` is never referenced from browser-exposed environment variables.
- `/api/chat` validates that client messages are user/assistant messages only.
- The system prompt is injected server-side through the Hermes adapter.
- Production deployments should use HTTPS for the public LaunchHive app and the Hermes API endpoint.