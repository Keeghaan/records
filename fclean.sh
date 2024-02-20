#!/bin/bash

if [ -d "./frontend/node_modules" ]; then
    sudo rm -rf ./frontend/node_modules
fi

if [ -d "./backend/db.sqlite3" ]; then
    sudo rm -f ./backend/db.sqlite3
fi

sudo docker compose down 

sudo docker system prune -af
