import axios from "axios";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import schema from "./schema";

const app = express();
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  schema,
  onHealthCheck: async () =>
    await axios.get("https://fourtonfish.com/hellosalut/?mode=auto").data
});

server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Pokemon server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
);
