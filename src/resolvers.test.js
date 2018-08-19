import axios from 'axios';
import resolvers from './resolvers'

jest.mock('axios');

const pokemonQuery = resolvers.Query.pokemon;
const expectedId = 1;
const expectedInput = { id: expectedId };
const expectedResponse = { data: { id: expectedId } }

beforeEach(() => axios.get.mockResolvedValue(expectedResponse));

it('should make request to pokeapi with given id', async () => {
    await pokemonQuery(undefined, expectedInput);
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining(`${expectedId}`));
});