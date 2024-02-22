#!/bin/bash

if [ -d "./frontend/node_modules" ]; then
    rm -rf ./frontend/node_modules
fi

if [ -f "./backend/db.sqlite3" ]; then
   rm -f ./backend/db.sqlite3
fi

docker compose down 

docker system prune -f
