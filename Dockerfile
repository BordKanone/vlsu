FROM node:16

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 5147

CMD ["yarn", "dev"]