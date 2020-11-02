FROM node:14.14.0-stretch-slim
LABEL version "1.0" mantainer="Torchu"

RUN npm i -g jest ts-jest ts-node typescript && mkdir /node_modules && chmod 755 /node_modules && chown node /node_modules

USER node
COPY --chown=node package*.json ./
RUN npm ci

USER root
RUN rm package*.json
USER node

WORKDIR /test

CMD [ "npm", "run", "test" ]