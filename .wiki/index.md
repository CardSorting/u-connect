# Sovereign Knowledge Ledger — LaunchHive

## Current system state

LaunchHive is a fully functional local MVP at `/Users/bozoegg/Desktop/u-connect`. It provides a premium, authenticated platform for commercialization matchmaking powered by a local Hermes Agent. The system persists all interactions, user profiles, and generated matches in a local SQLite database.

## Core Documentation
- [Architectural State Report (Senior Review)](./state_report.md)
- [Architecture Details](./architecture.md)
- [Changelog](./changelog.md)
- [Verification Log](./verification.md)

## Implemented Routes

- `/`: Cinematic landing page with ecosystem overview.
- `/login`: Local passwordless authentication.
- `/personas`: Seeded test persona selection grid.
- `/chat`: Immersive AI concierge chat with streaming and match extraction.
- `/matches`: Dashboard for reviewing saved commercialization matches.
- `/api/auth/*`: Local session and user handling.
- `/api/chat`: Context-aware proxy to local Hermes Agent.
- `/api/messages`: Persistence layer for chat and match extraction.

## Layer Map

- **Domain**: `src/domain/chat/types.ts`, `src/domain/launchhive/systemPrompt.ts`, `src/domain/launchhive/starters.ts`.
- **Infrastructure**: `src/infrastructure/db/prisma.ts`, `src/infrastructure/auth/session.ts`, `src/infrastructure/hermes/hermesClient.ts`, `src/generated/client/`.
- **API Boundary**: `app/api/auth/`, `app/api/chat/`, `app/api/conversations/`, `app/api/messages/`, `app/api/personas/`, `app/api/matches/`.
- **UI**: `app/layout.tsx`, `app/page.tsx`, `app/login/page.tsx`, `app/personas/page.tsx`, `app/chat/page.tsx`, `app/matches/page.tsx`.
- **Plumbing**: `src/utils/openAIStream.ts`.

## Verification Evidence

The system maintains a clean build state:
- `npm run lint` — PASSED
- `npx tsc --noEmit` — PASSED
- `npx prisma db seed` — COMPLETED (9 entities seeded)
- `npm audit --omit=dev` — ZERO VULNERABILITIES