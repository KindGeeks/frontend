### STAGE 1: Build ###

FROM node:8.1.4-alpine as builder

COPY package.json package.json

RUN npm i && mkdir /data && cp -R ./node_modules ./data
RUN npm install -g @angular/cli@1.7.2 && npm cache verify

WORKDIR /data

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
