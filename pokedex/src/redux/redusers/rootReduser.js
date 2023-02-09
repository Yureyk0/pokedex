import { combineReducers } from 'redux';
import { getPokemosReduser } from './getPokemosReduser';
import { getPokemonReduser } from './getPokemonReduser';
import { getPokemonEvolutionReduser } from './getPokemonEvolution';

export default combineReducers({ getPokemosReduser, getPokemonReduser, getPokemonEvolutionReduser });
