import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
  type Query {
    pokemon(id: Int): Pokemon
  }

  type Pokemon {
    id: ID
    name: String
    base_experience: Int
    height: Int 
    order: Int,
    weight: Int,
    abilities: [PokemonAbility],
    forms: [PokemonForm],
    held_items: [PokemonHeldItem],
    location_area_encounters: String,
    moves: [PokemonMove],
    sprites: PokemonSprites,
    species: PokemonSpecies
    stats: [PokemonStat],
    types: [PokemonType]
  }

  type PokemonMove {
    move: Move
    version_group_details: [PokemonMoveVersion]
  }

  type PokemonStat {
    stat: Stat,
    effort: Int,
    base_stat: Int
  }

  type PokemonType {
    slot: Int,
    type: Type
  }

  type PokemonSprites {
    front_default: String,
    front_shiny: String,
    front_female: String,
    front_shiny_female: String,
    back_default: String,
    back_shiny: String,
    back_female: String,
    back_shiny_female: String
  }

  type Move {
    id: Int,
    name: String,
    accuracy: Int,
    effect_change: Int,
    pp: Int,
    priority: Int,
    power: Int
  }

  type PokemonAbility {
    is_hidden: Boolean,
    slot: Int,
    ability: Ability
  }

  type PokemonForm {
    id: Int,
    name: String,
    order: Int,
    form_order: Int,
    is_default: Boolean,
    is_battle_only: Boolean,
    is_mega: Boolean,
    form_name: String,
    version_group: VersionGroup,
    names: [Name],
    form_names: [Name]
  }

  type PokemonHeldItem {
    item: Item,
    version_details: PokemonHeldItemVersion
  }

  type PokemonHeldItemVersion {
    version: Version,
    rarity: Int
  }

  type PokemonMoveVersion {
    move_learn_method: MoveLearnMethod,
    version_group: VersionGroup,
    level_learned_at: Int
  }

  type MoveLearnMethod {
    id: Int,
    name: String,
    descriptions: [Description],
    names: [Name],
    version_groups: [VersionGroup]
  }

  type Region {
    id: Int,
    locations: [Location],
    name: String,
    names: [Name],
    main_generation: Generation,
    pokedexes: [Pokedex]
    version_groups: [VersionGroup]
  }

  type Type {
   id: Int,
   name: String,
   damage_relations: TypeRelations,
   generation: Generation,
   names: [Name],
   pokemon: [TypePokemon],
   moves: [Move]
  }

  type TypeRelations {
    no_damage_to: [Type],
    half_damage_to: [Type],
    double_damage_to: [Type],
    no_damage_from: [Type],
    half_damage_from: [Type],
    double_damage_from: [Type]
  }

  type TypePokemon {
    slot: Int,
    pokemon: Pokemon
  }

  type PokemonColor {
    id: Int,
    name: String,
    names: [Name],
    pokemon_species: [PokemonSpecies]
  }

  type EvolutionChain {
    id: Int,
    baby_trigger_item: Item,
    chain: ChainLink
  }

  type ChainLink {
    is_baby: Boolean,
    species: PokemonSpecies,
    evolves_to: [ChainLink]
  }

  type FlavorText {
    flavor_text: String,
    language: Language
  }

  type ItemAttribute {
    id: Int,
    name: String,
    items: [Item],
    names: [Name],
    descriptions: [Description]
  }

  type Location {
    id: Int,
    name: String,
    region: Region,
    names: [Name]
  }

  type Item {
    id: Int,
    name: String,
    cost: Int,
    attributes: [ItemAttribute],
    category: ItemCategory,
    effect_entries: [VerboseEffect],
  }

  type ItemCategory {
    id: Int,
    name: String,
    items: [Item],
    names: [Name]
  }

  type VerboseEffect {
    effect: String,
    short_effect: String,
    language: Language
  }

  type Version {
    id: Int,
    name: String,
    names: [Name],
    version_group: VersionGroup
  }

  type Ability {
    id: Int,
    name: String,
    is_main_series: Boolean,
    generation: Generation,
    names: [Name],
    effect_entires: [Name],
    effect_changes: [AbilityEffectChange],
    flavor_text_entries: [AbilityFlavorText],
    pokemon: [AbilityPokemon]
  }

  type AbilityPokemon {
    is_hidden: Boolean,
    slot: Int,
    pokemon: Pokemon
  }

  type AbilityFlavorText {
    flavor_text: String,
    language: Language,
    version_group: VersionGroup
  }

  type Generation {
    id: Int,
    name: String,
    abilities: [Ability],
    names: [Name],
    main_region: Region,
    moves: [Move],
    pokemon_species: [PokemonSpecies],
    types: [Type],
    version_groups: [VersionGroup]
  }

  type Name {
    name: String,
    language: Language
  }

  type Language {
    id: Int,
    name: String,
    official: Boolean,
    iso639: String,
    iso3166: String,
    names: [Name]
  }

  type AbilityEffectChange {
    effect_entries: [Effect],
    version_group: VersionGroup
  }

  type VersionGroup {
    id: Int,
    name: String,
    order: Int,
    generation: Generation,
    move_learn_methods: [MoveLearnMethod],
    pokedexes: [Pokedex],
    regions: [Region],
    versions: [Version]
  }

  type Stat {
    id: Int,
    name: String,
    game_index: Int,
    is_battle_only: Boolean,
    names: [Name]
  }

  type Pokedex {
    id: Int,
    name: String,
    is_main_series: Boolean,
    descriptions: [Description],
    names: [Name],
    pokemon_entries: [PokemonEntry],
    region: Region,
    version_groups: [VersionGroup]
  }

  type PokemonEntry {
    entry_number: Int,
    pokemon_species: PokemonSpecies
  }

  type PokemonSpecies {
    id: Int,
    name: String,
    order: Int,
    gender_rate: Int,
    capture_rate: Int,
    base_happiness: Int,
    is_baby: Boolean,
    hatch_counter: Int,
    has_gender_differences: Boolean,
    forms_switchable: Boolean,
    color: PokemonColor,
    evolves_from_species: PokemonSpecies,
    evolution_chain: EvolutionChain,
    generation: Generation,
    names: [Name],
    flavor_text_entries: [FlavorText],
    form_descriptions: [Description],
  }

  type Description {
    description: String,
    language: Language
  }

  type Effect {
    effect: String,
    language: Language
  }
  
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;
