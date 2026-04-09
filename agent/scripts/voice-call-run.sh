#!/usr/bin/env bash
set -euo pipefail
cd /home/sumitsamsung0987/.openclaw/workspace/livekit-agent-node

if [ ! -f .env.local ]; then
  echo "Missing .env.local. Copy .env.example and fill LIVEKIT_URL/API_KEY/API_SECRET first."
  exit 1
fi

if [ ! -d node_modules ]; then
  npm install
fi

# Ensure required VAD/turn-detector models are present
npm run download-files

npm run build
npm run start
