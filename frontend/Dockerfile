FROM node:14

WORKDIR /app

COPY "./script.sh" "/app/script.sh"

RUN chmod +x /app/script.sh
RUN apt update && apt upgrade -y

ENTRYPOINT [ "/bin/bash", "/app/script.sh" ]