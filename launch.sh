#!/bin/bash

source env/bin/activate

cd backend

python3 manage.py makemigrations

chmod +666 db.sqlite3

python3 manage.py migrate

cd ..

docker compose up --build
