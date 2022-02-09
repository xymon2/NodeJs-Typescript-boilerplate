FROM node:16

WORKDIR /root

COPY package*.json ./

RUN npm ci

COPY . .
RUN npm run build


WORKDIR /root/dist
EXPOSE 5000


CMD ["node", "server.js"]