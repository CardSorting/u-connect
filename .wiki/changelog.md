# Changelog

## 2026-05-09 — LaunchHive MVP frontend and Hermes proxy

### Added

- Created a Next.js 16, React 19, TypeScript, TailwindCSS application scaffold.
- Added the LaunchHive landing page at `/` with required sections and CTA links to `/chat`.
- Added the chat UI at `/chat` with local conversation state, suggested starters, reset behavior, request dispatch to `/api/chat`, and OpenAI-compatible SSE delta parsing for streaming assistant responses.
- Added `/api/chat` as a server-side proxy route for Hermes Agent's OpenAI-compatible `/chat/completions` endpoint.
- Added a server-side Hermes adapter that reads `HERMES_API_BASE_URL`, `HERMES_API_KEY`, and `HERMES_MODEL` from environment variables and sends `stream: true` chat completion requests.
- Added the LaunchHive system prompt as a domain-level behavior contract.
- Added pure domain chat message types and request-message validation.
- Added `.env.example` and README deployment notes for the Hermes-backed LaunchHive frontend.

### Changed

- Configured ESLint flat config for Next.js 16 via `eslint.config.mjs` and `npm run lint`.
- Configured `package-lock.json` and `package.json` to keep Next's nested PostCSS dependency resolved to a patched PostCSS version for audit cleanliness.
- Updated UI copy to present the chat experience as a branded LaunchHive concierge rather than a raw Hermes demo.

### Verified

- `npm ci` completed successfully and reported zero vulnerabilities.
- `npm run lint` completed successfully.
- `npm run build` completed successfully and produced static routes for `/` and `/chat` plus dynamic route `/api/chat`.
- `npx tsc --noEmit` completed successfully.
- `npm audit --omit=dev --json` completed with zero production vulnerabilities.