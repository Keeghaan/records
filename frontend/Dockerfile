FROM node:18

WORKDIR /app

COPY package.json package-lock.json script.sh /app/

ENTRYPOINT ["/bin/bash", "/app/script.sh"]