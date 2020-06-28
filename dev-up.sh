#!/usr/bin/env bash
set -euo pipefail

echo '--Docker-compose up--'
docker-compose up -d --build
