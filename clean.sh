#!/bin/bash

if [ -d "./frontend/node_modules" ]; then
    sudo rm -rf ./frontend/node_modules
fi

if [ -f "./frontend/package-lock.json" ]; then
    rm -f ./frontend/package-lock.json
fi

sudo docker compose down 

sudo docker system prune -af
