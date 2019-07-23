FROM node:12.6-alpine

WORKDIR /usr/app
COPY . .
RUN yarn --frozen-lockfile --ignore-optional --non-interactive --production

EXPOSE 4000

CMD ["yarn", "serve"]

