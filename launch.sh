#!/bin/bash

source env/bin/activate

cd backend

python manage.py makemigrations

chmod +666 db.sqlite3

python manage.py migrate

cd ..

docker compose up --build
