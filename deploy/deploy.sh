#!/usr/bin/env bash
set -euo pipefail
IMAGE="${1:-}"
if [[ -z "$IMAGE" ]]; then echo "Usage: deploy.sh <IMAGE_REF>"; exit 1; fi
echo "[deploy] Using image: $IMAGE"
APP_DIR="$HOME/hello-lite"
mkdir -p "$APP_DIR"
cat > "$APP_DIR/docker-compose.yml" <<YAML
services:
  hello:
    image: $IMAGE
    ports:
      - "3000:3000"
    restart: unless-stopped
YAML
docker compose -f "$APP_DIR/docker-compose.yml" pull || true
docker compose -f "$APP_DIR/docker-compose.yml" up -d
echo "[deploy] Done."
