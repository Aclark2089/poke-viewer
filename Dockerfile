FROM node:9.11.1 AS build-env

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

COPY package*.json /
RUN npm install
WORKDIR /app
COPY . .
RUN npm run build

FROM node:9.11.1

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

WORKDIR /app
COPY --from=build-env /app/dist dist/
COPY package*.json ./
RUN npm install --production

EXPOSE 4000

CMD ["npm", "run", "serve"]

