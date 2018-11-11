import axios from "axios";
import { linksResolver } from "./shared/utilities";

const POKEAPI_URL = "http://pokeapi.co/api/v2";
const POKEMON_REQUEST_URL = `${POKEAPI_URL}/pokemon`;

export const resolvers = {
  Query: {
    pokemon: async (root, { id }) => {
      const request = `${POKEMON_REQUEST_URL}/${id}`;
      const { data: result } = await axios.get(request);
      return result;
    }
  },
  Pokemon: {
    forms: ({ forms: formLinks }) => linksResolver(formLinks)
  },
  PokemonAbility: {
    ability: async ({ ability: { url } }) => {
      const { data: ability } = await axios.get(url);
      return ability;
    }
  },
  PokemonMove: {
    move: async ({ move: { url } }) => {
      const { data: move } = await axios.get(url);
      return move;
    }
  },
  PokemonMoveVersion: {
    move_learn_method: async ({ move_learn_method: { url } }) => {
      const { data: move_learn_method } = await axios.get(url);
      return move_learn_method;
    }
  },
  PokemonHeldItem: {
    item: async ({ item: { url } }) => {
      const { data: item } = await axios.get(url);
      return item;
    }
  },
  PokemonStat: {
    stat: async ({ stat: { url } }) => {
      const { data: stat } = await axios.get(url);
      return stat;
    }
  },
  PokemonType: {
    type: async ({ type: { url } }) => {
      const type = (await axios.get(url)).data;
      return type;
    }
  },
  TypeRelations: {
    double_damage_to: ({ double_damage_to: typeLinks }) =>
      linksResolver(typeLinks),
    half_damage_to: ({ half_damage_to: typeLinks }) => linksResolver(typeLinks),
    no_damage_from: ({ no_damage_from: typeLinks }) => linksResolver(typeLinks),
    half_damage_from: ({ half_damage_from: typeLinks }) =>
      linksResolver(typeLinks),
    double_damage_from: ({ double_damage_from: typeLinks }) =>
      linksResolver(typeLinks),
    no_damage_to: ({ no_damage_to: typeLinks }) => linksResolver(typeLinks)
  },
  TypePokemon: {
    pokemon: async ({ pokemon: pokemonLink }) => {
      const { data: pokemon } = await axios.get(pokemonLink.url);
      return pokemon;
    }
  }
};
