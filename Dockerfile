# syntax=docker/dockerfile:1.7

FROM node:22-bookworm-slim

WORKDIR /app

# Install dependencies in a separate layer.
# This layer is reused until package.json/package-lock.json changes.
COPY package.json package-lock.json ./

RUN --mount=type=cache,target=/root/.npm \
    npm ci

# Copy application source only after dependencies.
COPY . .

# dist is mounted from the host by docker compose.
# Clean it first to avoid stale artifacts from previous builds.
CMD ["sh", "-c", "npx expo export --platform web && find /output -mindepth 1 -delete && cp -a /app/dist/. /output/"]
