import { RESTDataSource } from 'apollo-datasource-rest';

const POKEAPI_URL = 'http://pokeapi.co/api/v2/';

export class PokeAPI extends RESTDataSource {
    constructor(args) {
        super(args);
        this.baseURL = POKEAPI_URL;
    }

    async getPokemonById(id) {
        const pokemon = await this.get(`pokemon/${id}`);
        return pokemon;
    }

    async hateoasUrlResolve(url) {
        return this.get(url);
    }

    async hateoasUrlsResolver(links) {
        return Promise.all(
            links.map(link => this.hateoasUrlResolve(link.url))
        ).then(data => data);
    }
}
