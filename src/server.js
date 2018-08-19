import axios from 'axios';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import schema from './schema';

const app = express();

const server = new ApolloServer({
  schema,
  onHealthCheck: async () => await axios.get('https://fourtonfish.com/hellosalut/?mode=auto').data,
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Pokemon server ready at http://localhost:4000${server.graphqlPath}`)
);