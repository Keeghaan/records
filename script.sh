#!/bin/bash

docker-compose up --build -d

sleep 5

docker exec -it records-frontend mkdir -p /app/frontend

docker cp ./frontend records-frontend:/app/

docker-compose exec frontend npm install || exit 1

docker-compose down
docker-compose up --buildgit 