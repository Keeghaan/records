#!/bin/bash

cd /app || exit 1
npm install || exit 1
apt-get update
npm run start