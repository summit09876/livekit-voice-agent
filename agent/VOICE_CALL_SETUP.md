# Live Voice Call Setup (/voice-call)

Goal: call `+14843985002` and speak with your LiveKit agent.
SIP domain: `3fzkbhpgl1i.sip.livekit.cloud`

## 1) Agent server

In `livekit-agent-node`:

1. Copy `.env.example` -> `.env.local`
2. Fill:
   - `LIVEKIT_URL`
   - `LIVEKIT_API_KEY`
   - `LIVEKIT_API_SECRET`
3. Start:
   ```bash
   bash scripts/voice-call-run.sh
   ```

## 2) LiveKit Cloud console

In `https://cloud.livekit.io`:

1. Go to **SIP** and confirm inbound number `+14843985002` is active.
2. Go to **Agents / Dispatch** and ensure agent name is `my-agent`.
3. Create/verify dispatch rule so inbound SIP calls route to `my-agent`.

## 3) Test

- Call `+14843985002` from phone.
- You should hear Lily greeting and can talk naturally.

## 4) Troubleshooting

- If call connects but no voice: check agent process is running and LiveKit creds are valid.
- If number does not route: verify SIP inbound trunk/dispatch rule in Cloud.
- If agent crashes: run `pnpm run build` and check logs.
