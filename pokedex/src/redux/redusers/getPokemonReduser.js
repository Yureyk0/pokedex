import { POKEMON_LOAD } from '../types';

const initialState = {
  pokemon: {},
  // pokemon: {},
  // loading: true,
};

export const getPokemonReduser = (state = initialState, action) => {
  switch (action.type) {
    case POKEMON_LOAD:
      return {
        ...state,
        pokemon: action.data,
      };
    default:
      return state;
  }
};
