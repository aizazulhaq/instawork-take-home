#!/bin/bash

# Navigate to the directory containing the Docker Compose file
cd "$GITHUB_ROOT/instawork-take-home/infrastructure/docker/compose" || exit

# Run Docker Compose
docker-compose -f local.yaml up -d
