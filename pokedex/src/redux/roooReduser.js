import { combineReducers } from 'redux';
import { getPokemosReduser } from './getPokemosReduser';
import { getPokemonReduser } from './getPokemonReduser';

export default combineReducers({ getPokemosReduser, getPokemonReduser });
