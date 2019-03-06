import axios from 'axios';
import { linksResolver } from './shared/utilities';

export const resolvers = {
    Query: {
        pokemon: async (root, { id }, { dataSources: { pokeAPI } }) =>
            pokeAPI.getPokemonById(id),
    },
    Pokemon: {
        forms: ({ forms: formLinks }) => linksResolver(formLinks),
        species: async ({ species: { url } }) => {
            const { data: species } = await axios.get(url);
            return species;
        },
    },
    PokemonAbility: {
        ability: async ({ ability: { url } }) => {
            const { data: ability } = await axios.get(url);
            return ability;
        },
    },
    PokemonMove: {
        move: async ({ move: { url } }) => {
            const { data: move } = await axios.get(url);
            return move;
        },
    },
    PokemonMoveVersion: {
        move_learn_method: async ({ move_learn_method: { url } }) => {
            const { data: move_learn_method } = await axios.get(url);
            return move_learn_method;
        },
    },
    PokemonHeldItem: {
        item: async ({ item: { url } }) => {
            const { data: item } = await axios.get(url);
            return item;
        },
    },
    PokemonStat: {
        stat: async ({ stat: { url } }) => {
            const { data: stat } = await axios.get(url);
            return stat;
        },
    },
    PokemonType: {
        type: async ({ type: { url } }) => {
            const type = (await axios.get(url)).data;
            return type;
        },
    },
    TypeRelations: {
        double_damage_to: ({ double_damage_to: typeLinks }) =>
            linksResolver(typeLinks),
        half_damage_to: ({ half_damage_to: typeLinks }) =>
            linksResolver(typeLinks),
        no_damage_from: ({ no_damage_from: typeLinks }) =>
            linksResolver(typeLinks),
        half_damage_from: ({ half_damage_from: typeLinks }) =>
            linksResolver(typeLinks),
        double_damage_from: ({ double_damage_from: typeLinks }) =>
            linksResolver(typeLinks),
        no_damage_to: ({ no_damage_to: typeLinks }) => linksResolver(typeLinks),
    },
    TypePokemon: {
        pokemon: async ({ pokemon: pokemonLink }) => {
            const { data: pokemon } = await axios.get(pokemonLink.url);
            return pokemon;
        },
    },
    PokemonSpecies: {
        generation: async ({ generation: { url } }) => {
            const { data: generation } = await axios.get(url);
            return generation;
        },
        evolution_chain: async ({ evolution_chain: { url } }) => {
            const { data: evolution_chain } = await axios.get(url);
            return evolution_chain;
        },
        color: async ({ color: { url } }) => {
            const { data: color } = await axios.get(url);
            return color;
        },
    },
    PokemonColor: {
        pokemon_species: ({ pokemon_species: speciesLinks }) =>
            linksResolver(speciesLinks),
    },
};
