#!/bin/bash

cd "$GITHUB_ROOT/instawork-take-home/infrastructure/docker/compose" || exit

read -p "Do you want to wipe data? (y/n): " confirm
if [[ "$confirm" == "y" ]]; then
    docker-compose -f local.yaml down
    rm -rf "$GITHUB_ROOT/instawork-take-home/data" || exit
else
    echo "Data not wiped....."
fi

docker-compose -f local.yaml up -d --build
