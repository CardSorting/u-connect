# LaunchHive: Authentic Matching Engine

LaunchHive is a trust-preserving commercialization matching system for Utah’s deep-tech ecosystem. It bridges the gap between researchers, founders, and experts using a multi-layer scoring stack.

## Core Features (V2)

- **Authentic Matching Stack**: A 5-layer scoring engine (Eligibility, Constraint, Commercial, Trust, Outcome).
- **Readiness Gating**: High-trust protection that ensures only "match-ready" startups reach expert attention.
- **Structured Evidence**: Explainable matches with categorized reasons and identified risks.
- **Outcome Tracking**: A closed-loop system that learns from real-world pilots and partnerships.
- **Admin Concierge**: Human-in-the-loop review for high-value ecosystem matches.

## Architecture & Documentation

- [Technical Architecture Spec (V2)](file:///Users/bozoegg/Desktop/u-connect/.wiki/Matching-Engine-V2.md)
- [Matching Logic & Integration](file:///Users/bozoegg/Desktop/u-connect/.wiki/Matching-Logic.md)

## Routes

- `/` — Branded landing page.
- `/chat` — Guided concierge intake.
- `/matches` — Premium matching dashboard with evidence stack.
- `/api/matches` — Multi-layer matching pipeline.
- `/api/admin/matches` — Concierge review queue.

## Development

```bash
npm install
npx prisma db push
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Create `.env.local` for local development:

```env
DATABASE_URL="file:./data/launchhive.db"
HERMES_API_BASE_URL=https://hermes.launchhive.ai/v1
HERMES_API_KEY=your-secure-hermes-api-key
HERMES_MODEL=hermes-agent
```