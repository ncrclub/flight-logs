FROM node:7

EXPOSE 8081
WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

CMD node bin/www

