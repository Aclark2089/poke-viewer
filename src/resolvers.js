import axios from "axios";

const POKEAPI_URL = "http://pokeapi.co/api/v2";
const POKEMON_REQUEST_URL = `${POKEAPI_URL}/pokemon`;

const resolvers = {
  Query: {
    pokemon: async (root, { id }) => {
      const request = `${POKEMON_REQUEST_URL}/${id}`;
      const { data } = await axios.get(request);
      return data;
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
    ability: async ({ ability: abilityLink }) => {
      const { url } = abilityLink;
      const { data } = await axios.get(url);
      return data;
    }
  },
  PokemonMove: {
    move: async ({ move: moveLink }) => {
      const { url } = moveLink;
      const { data } = await axios.get(url);
      return data;
    }
  },
  PokemonMoveVersion: {
    move_learn_method: async ({ move_learn_method: moveLearnMethodLink }) => {
      const { url } = moveLearnMethodLink;
      const { data } = await axios.get(url);
      return data;
    }
  }
};

export default resolvers;
