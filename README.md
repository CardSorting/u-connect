# LaunchHive

LaunchHive is a Next.js + TypeScript + TailwindCSS landing page and chat frontend for a deployed Hermes Agent server. Hermes is treated as an OpenAI-compatible backend through a server-side `/api/chat` proxy, so the browser never receives the Hermes API key.

## Routes

- `/` — branded landing page for Utah deep-tech commercialization matching
- `/chat` — guided chat frontend with streaming responses, suggested starters, and reset
- `/api/chat` — server-side proxy to the deployed Hermes Agent API server

## Environment variables

Create `.env.local` for local development:

```env
HERMES_API_BASE_URL=https://hermes.launchhive.ai/v1
HERMES_API_KEY=your-secure-hermes-api-key
HERMES_MODEL=hermes-agent
```

Do not expose `HERMES_API_KEY` to browser code. Keep it in Vercel or server-side environment variables only.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Hermes deployment checklist

1. Install Hermes on a Linux/macOS/WSL2 server.
2. Configure at least one AI provider for Hermes.
3. Enable the Hermes API server with `API_SERVER_ENABLED=true`, `API_SERVER_HOST=0.0.0.0`, `API_SERVER_PORT=8642`, and a secure `API_SERVER_KEY`.
4. Start Hermes with `hermes gateway`.
5. Put the API behind HTTPS, for example `https://hermes.launchhive.ai/v1`.
6. Store the Hermes base URL, API key, and model in LaunchHive environment variables.

The LaunchHive frontend should continue to call only `/api/chat`.