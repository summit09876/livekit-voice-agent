# LiveKit Voice Agent

Monorepo for the LiveKit Voice Agent — Anam avatar + Cartesia TTS + Deepgram STT.

```
livekit-voice-agent/
├── agent/          # Node.js LiveKit agent worker (STT → LLM → TTS + Anam avatar)
├── frontend/       # Next.js React UI (served at /voice-agent-livekit)
├── .env.local      # Shared secrets (not committed)
├── docker-compose.yml
└── pnpm-workspace.yaml
```

## Setup

```bash
cp .env.local.example .env.local  # fill in your keys
```

## Run (Docker)

```bash
# Start both agent + frontend
docker compose up -d

# Logs
docker compose logs -f agent
docker compose logs -f frontend

# Rebuild after code changes
docker compose up -d --build
```

## Run (local dev)

```bash
pnpm install          # installs all workspaces
pnpm agent:dev        # runs agent in dev/watch mode
pnpm frontend:dev     # runs Next.js on localhost:3000
```

## Environment Variables

| Variable | Used by | Description |
|---|---|---|
| `LIVEKIT_URL` | agent + frontend | LiveKit Cloud WSS URL |
| `LIVEKIT_API_KEY` | agent + frontend | LiveKit API key |
| `LIVEKIT_API_SECRET` | agent + frontend | LiveKit API secret |
| `ANAM_API_KEY` | agent | Anam avatar API key |
| `AGENT_NAME` | agent | Agent name registered with LiveKit |
| `NEXT_PUBLIC_AGENT_NAME` | frontend | Displayed agent name |
| `ALLOW_INSECURE_TOKEN_ENDPOINT` | frontend | Set `true` for dev/internal use |
