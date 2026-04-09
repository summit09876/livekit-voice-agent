FROM node:20-alpine AS base
WORKDIR /app
RUN corepack enable

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# .env.local is passed as build args for NEXT_PUBLIC_ vars at build time
# At runtime it is injected via docker-compose env_file
ARG NEXT_PUBLIC_AGENT_NAME=Lily
ARG NEXT_PUBLIC_CONN_DETAILS_ENDPOINT=/voice-agent-livekit/api/token
ENV NEXT_PUBLIC_AGENT_NAME=$NEXT_PUBLIC_AGENT_NAME
ENV NEXT_PUBLIC_CONN_DETAILS_ENDPOINT=$NEXT_PUBLIC_CONN_DETAILS_ENDPOINT
RUN pnpm build

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts
EXPOSE 3000
CMD ["pnpm", "start", "-p", "3000"]
