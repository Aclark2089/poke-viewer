import axios from "axios";

const POKEAPI_URL = "http://pokeapi.co/api/v2";
const POKEMON_REQUEST_URL = `${POKEAPI_URL}/pokemon`;

export const resolvers = {
  Query: {
    pokemon: async (root, { id }) => {
      const request = `${POKEMON_REQUEST_URL}/${id}`;
      return (await axios.get(request)).data;
    }
  },
  Pokemon: {
    forms: ({ forms: formLinks }) => {
      return Promise.all(
        formLinks.map(formLink =>
          axios.get(formLink.url).then(({ data: form }) => form)
        )
      );
    }
  },
  PokemonAbility: {
    ability: async ({ ability: { url } }) => {
      return (await axios.get(url)).data;
    }
  },
  PokemonMove: {
    move: async ({ move: { url } }) => {
      return (await axios.get(url)).data;
    }
  },
  PokemonMoveVersion: {
    move_learn_method: async ({ move_learn_method: { url } }) => {
      return (await axios.get(url)).data;
    }
  },
  PokemonHeldItem: {
    item: async ({ item: { url } }) => {
      return (await axios.get(url)).data;
    }
  },
  PokemonStat: {
    stat: async({ stat: { url } }) => {
      return (await axios.get(url)).data;
    }
  },
  PokemonType: {
    type: async({ type: { url } }) => {
      return (await axios.get(url)).data;
    }
  }
};
