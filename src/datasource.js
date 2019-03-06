import { RESTDataSource } from 'apollo-datasource-rest';

export class PokeAPI extends RESTDataSource {
    constructor(params) {
        super(params);
        this.baseURL = 'http://pokeapi.co/api/v2/';
    }

    async getPokemonById(id) {
        const pokemon = await this.get(`pokemon/${id}`);
        return pokemon;
    }
}

export const pokeAPI = new PokeAPI();
