FROM node:20-buster

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY server.js ./

ENTRYPOINT [ "node", "server.js" ]