FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn 
RUN yarn add nodemon

COPY . .

CMD ["yarn", "dev"]
