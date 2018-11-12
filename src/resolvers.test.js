import axios from "axios";
import { resolvers } from "./resolvers";
import { linksResolver } from "./shared/utilities";

jest.mock("axios");
jest.mock("./shared/utilities");

describe("Top level resolvers", () => {
  const testUrl = "url";
  const expectedResult = {};
  const expectedResponse = { data: expectedResult };

  beforeEach(() => axios.get.mockResolvedValue(expectedResponse));

  it("should make Query pokemon request to pokeapi with given id", async () => {
    const expectedId = 1;
    const input = { id: expectedId };

    const actualResult = await resolvers.Query.pokemon(undefined, input);

    expect(actualResult).toEqual(expectedResult);
  });

  it("should resolve the PokemonAbility ability attribute by getting the linked content from the url", async () => {
    const input = {
      ability: {
        url: testUrl
      }
    };

    const actualResult = await resolvers.PokemonAbility.ability(input);

    expect(axios.get).toHaveBeenCalledWith(testUrl);
    expect(actualResult).toEqual(expectedResult);
  });

  it("should resolve the PokemonMove move attribute by getting the linked content from the url", async () => {
    const input = {
      move: {
        url: testUrl
      }
    };

    const actualResult = await resolvers.PokemonMove.move(input);

    expect(axios.get).toHaveBeenCalledWith(testUrl);
    expect(actualResult).toEqual(expectedResult);
  });

  it("should resolve the PokemonMoveVersion move_learn_method attribute by getting the linked content from the url", async () => {
    const input = {
      move_learn_method: {
        url: testUrl
      }
    };

    const actualResult = await resolvers.PokemonMoveVersion.move_learn_method(input);

    expect(axios.get).toHaveBeenCalledWith(testUrl);
    expect(actualResult).toEqual(expectedResult);
  });

  it("should resolve the PokemonHeldItem item attribute by getting the linked content from the url", async () => {
    const input = {
      item: {
        url: testUrl
      }
    };

    const actualResult = await resolvers.PokemonHeldItem.item(input);

    expect(axios.get).toHaveBeenCalledWith(testUrl);
    expect(actualResult).toEqual(expectedResult);
  });

  it("should resolve the PokemonStat stat attribute by getting the linked content from the url", async () => {
    const input = {
      stat: {
        url: testUrl
      }
    };

    const actualResult = await resolvers.PokemonStat.stat(input);

    expect(axios.get).toHaveBeenCalledWith(testUrl);
    expect(actualResult).toEqual(expectedResult);
  });

  it("should resolve the PokemonType type attribute by getting the linked content from the url", async () => {
    const input = {
      type: {
        url: testUrl
      }
    };

    const actualResult = await resolvers.PokemonType.type(input);

    expect(axios.get).toHaveBeenCalledWith(testUrl);
    expect(actualResult).toEqual(expectedResult);
  });

  it('should resolve the Pokemon species attribute by getting linked content from url', async () => {
    const input = {
      species: {
        url: testUrl
      }
    };

    const actualResult = await resolvers.Pokemon.species(input);

    expect(axios.get).toHaveBeenCalledWith(testUrl);
    expect(actualResult).toEqual(expectedResult);
  });

  it('should resolve the PokemonSpecies generation attribute by getting linked content from url', async () => {
    const input = {
      generation: {
        url: testUrl
      }
    };

    const actualResult = await resolvers.PokemonSpecies.generation(input);

    expect(axios.get).toHaveBeenCalledWith(testUrl);
    expect(actualResult).toEqual(expectedResult);
  });

  it('should resolve the PokemonSpecies evolution_chain attribute by getting linked content from url', async () => {
    const input = {
      evolution_chain: {
        url: testUrl
      }
    };

    const actualResult = await resolvers.PokemonSpecies.evolution_chain(input);

    expect(axios.get).toHaveBeenCalledWith(testUrl);
    expect(actualResult).toEqual(expectedResult);
  });

  it('should resolve the PokemonSpecies color attribute by getting linked content from url', async () => {
    const input = {
      color: {
        url: testUrl
      }
    };

    const actualResult = await resolvers.PokemonSpecies.color(input);

    expect(axios.get).toHaveBeenCalledWith(testUrl);
    expect(actualResult).toEqual(expectedResult);
  });
});

describe("Resolvers using link collections", () => {
  const testLinks = [
    {
      url: "test"
    }
  ];
  const testContent = [
    {
      name: "test"
    }
  ];

  beforeEach(() => {
    linksResolver.mockResolvedValue(testContent);
  });

  describe("Pokemon", () => {
    it("should resolve Pokemon forms attribute by getting all forms from their associated urls", async () => {
      const input = {
        forms: testLinks
      };

      const actualResult = await resolvers.Pokemon.forms(input);

      expect(linksResolver).toHaveBeenCalledWith(testLinks);
      expect(actualResult).toEqual(testContent);
    });
  });

  describe("TypeRelations", () => {
    it("should resolve double_damage_to attribute by getting all content from their associated urls", async () => {
      const input = {
        double_damage_to: testLinks
      };

      const actualResult = await resolvers.TypeRelations.double_damage_to(
        input
      );

      expect(linksResolver).toHaveBeenCalledWith(testLinks);
      expect(actualResult).toEqual(testContent);
    });

    it("should resolve double_damage_from attribute by getting all content from their associated urls", async () => {
      const input = {
        double_damage_from: testLinks
      };

      const actualResult = await resolvers.TypeRelations.double_damage_from(
        input
      );

      expect(linksResolver).toHaveBeenCalledWith(testLinks);
      expect(actualResult).toEqual(testContent);
    });

    it("should resolve half_damage_to attribute by getting all content from their associated urls", async () => {
      const input = {
        half_damage_to: testLinks
      };

      const actualResult = await resolvers.TypeRelations.half_damage_to(input);

      expect(linksResolver).toHaveBeenCalledWith(testLinks);
      expect(actualResult).toEqual(testContent);
    });

    it("should resolve half_damage_from attribute by getting all content from their associated urls", async () => {
      const input = {
        half_damage_from: testLinks
      };

      const actualResult = await resolvers.TypeRelations.half_damage_from(
        input
      );

      expect(linksResolver).toHaveBeenCalledWith(testLinks);
      expect(actualResult).toEqual(testContent);
    });

    it("should resolve no_damage_from attribute by getting all content from their associated urls", async () => {
      const input = {
        no_damage_from: testLinks
      };

      const actualResult = await resolvers.TypeRelations.no_damage_from(input);

      expect(linksResolver).toHaveBeenCalledWith(testLinks);
      expect(actualResult).toEqual(testContent);
    });

    it("should resolve no_damage_to attribute by getting all content from their associated urls", async () => {
      const input = {
        no_damage_to: testLinks
      };

      const actualResult = await resolvers.TypeRelations.no_damage_to(input);

      expect(linksResolver).toHaveBeenCalledWith(testLinks);
      expect(actualResult).toEqual(testContent);
    });
  });

  describe('PokemonColor', () => {
    it('should resolve pokemon_species attribute by getting all content from their associated urls', async () => {
      const input = {
        pokemon_species: testLinks
      };

      const actualResult = await resolvers.PokemonColor.pokemon_species(input);

      expect(linksResolver).toHaveBeenCalledWith(testLinks);
      expect(actualResult).toEqual(testContent);
    });
  });
});
