FROM node:14

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm i

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
