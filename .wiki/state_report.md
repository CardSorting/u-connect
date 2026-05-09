# LaunchHive Local MVP: Architectural State Report

**Date**: 2026-05-09  
**Status**: Implementation Complete / Review Ready  
**Environment**: Local Development Only

## 1. Project Overview
LaunchHive is a local-only AI commercialization concierge for Utah's deep-tech ecosystem. It uses a local Hermes Agent runtime for conversational intake and matchmaking, with SQLite for persistent storage.

## 2. Technical Stack
- **Frontend/Backend**: Next.js 16 (App Router)
- **Database**: SQLite (`./data/launchhive.db`)
- **ORM**: Prisma (Custom output to `src/generated/client` for type safety)
- **AI Backend**: Hermes Agent (Local API at `http://127.0.0.1:8642/v1`)
- **Styling**: TailwindCSS + Premium Design System (Dark Mode)
- **Auth**: Local cookie-based session management

## 3. Core Architecture & Layers

### Data Layer (Prisma + SQLite)
- **Persistence**: All state is local.
- **Models**:
  - `User`: Local demo users.
  - `Session`: Cookie-token mapping for local auth.
  - `Persona`: Seeded test profiles (6 human personas, 3 startup archetypes).
  - `Conversation`: Chat session tracking with states (`intake`, `matching`, etc.).
  - `Message`: Full history of user/assistant interactions.
  - `MatchResult`: Structured recommendations extracted from AI responses.

### Infrastructure Layer
- **Hermes Client**: Server-side adapter for OpenAI-compatible streaming.
- **Auth System**: Middleware-ready session helpers (`getCurrentUser`).
- **Prisma Singleton**: Centralized DB client pointing to custom generated types.

### API Layer
- `POST /api/auth/login`: Handles user creation/finding and session setup.
- `POST /api/chat`: Orchestrates context injection (persona + startups) and proxies to Hermes.
- `POST /api/messages`: Persists chat history and parses/saves structured match results.
- `GET /api/personas`: Loads seeded test data.
- `GET /api/matches`: Retrieves historical recommendations for the user.

### UI Layer
- **Cinematic Landing**: High-fidelity hero and ecosystem overview.
- **Persona Picker**: Visual grid for selecting test scenarios.
- **Immersive Chat**: Real-time streaming interface with visual feedback for match generation.
- **Match Dashboard**: Comparison view of generated commercialization opportunities.

## 4. Key Implementation Details

### Match Extraction Logic
The concierge is prompted to include a parseable JSON block at the end of match recommendations. The client-side chat logic detects this block, parses it, and sends it to the `/api/messages` endpoint for persistence into the `MatchResult` table.

### Custom Prisma Output
To resolve environment-specific type resolution issues with `@prisma/client` in the local IDE, the generator was configured to output directly to `src/generated/client`. This ensures 100% type safety and zero-config imports.

## 5. Demo Hardening & Verification
- **Strict Protocol**: Concierge follows a hard-sequenced flow (Intake -> Summary -> Confirmation -> Matches).
- **Match Delimiters**: Structured output is now wrapped in `<MATCH_JSON>` tags for deterministic parsing.
- **State Indicators**: Live labels show progress (e.g., "Learning about you", "Finding matches").
- **Offline Recovery**: System provides actionable recovery instructions if the local Hermes service is offline.
- **Demo Reset**: Administrative reset available in the footer to clear all local sessions and chats.

## 6. Verified Demo Flows
- **Dr. Maya Chen** (Biotech) -> **CardioSignal Bio**
- **Ethan Ramirez** (AI) -> **LabPilot AI**
- **Sarah Whitaker** (Ops) -> **ForgeGrid Systems**

## 7. Next Steps for Review
- Audit the `systemPrompt` for ecosystem alignment.
- Review the match result extraction robustness.
- Validate UX transitions on the Chat page.
