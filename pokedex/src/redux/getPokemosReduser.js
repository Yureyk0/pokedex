import { POKEMONS_LOAD } from './types';

const initialState = {
  pokemons: [],
  // pokemon: {},
  // loading: true,
};

export const getPokemosReduser = (state = initialState, action) => {
  switch (action.type) {
    case POKEMONS_LOAD:
      return {
        ...state,
        pokemons: action.data,
      };
    default:
      return state;
  }
};
