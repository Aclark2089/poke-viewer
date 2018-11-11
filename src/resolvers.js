import axios from "axios";
import { linksResolver } from "./shared/utilities";

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
    forms: ({ forms: formLinks }) => linksResolver(formLinks)
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
    stat: async ({ stat: { url } }) => {
      return (await axios.get(url)).data;
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
      return (await axios.get(pokemonLink.url)).data;
    }
  }
};
