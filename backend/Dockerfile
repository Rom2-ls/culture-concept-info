ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package.json .

RUN npm cache clean --force

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3100

CMD ["npm", "run", "start:dev"]
