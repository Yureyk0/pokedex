import { POKEMON_EVOLUTION_LOAD } from '../types';

const initialState = {
  evoPokemon: {},
};

export const getPokemonEvolutionReduser = (state = initialState, action) => {
  switch (action.type) {
    case POKEMON_EVOLUTION_LOAD:
      console.log(action.data);
      return {
        ...state,
        evoPokemon: action.data,
      };
    default:
      return state;
  }
};
