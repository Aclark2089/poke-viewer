import resolvers from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
  type Query {
    pokemon(id: Int!): Pokemon
  }

  type Pokemon {
    id: ID!
    name: String!
    base_experience: Int!
    height: Int!
    is_default: Boolean!
    order: Int!,
    weight: Int!
  }
  
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;