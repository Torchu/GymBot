FROM node:15.0.1-alpine3.10
LABEL version "1.0" mantainer="Torchu"

WORKDIR /modules

COPY package.json ./

RUN npm install

WORKDIR /test
VOLUME /test

CMD cp -r /modules/node_modules/ /test && npm run test