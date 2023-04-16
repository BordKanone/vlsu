FROM node:14.16.1-alpine3.13

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 5147

CMD ["yarn", "dev"]