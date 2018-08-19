import axios from 'axios';

const POKEAPI_URL = 'http://pokeapi.co/api/v2';
const POKEMON_REQUEST_URL = `${POKEAPI_URL}/pokemon`

const resolvers = {
  Query: {
    pokemon: async (root, { id }) => {
      const request = `${POKEMON_REQUEST_URL}/${id}`;
      const { data } = await axios.get(request)
      return data;
    } 
  }
};

export default resolvers;
