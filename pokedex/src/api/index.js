import axios from 'axios';
// import { GET_POKEMONS, GET_POKEMON, CHANGE_FILTER } from '../constants/actionTypes';

// export const api = axios.require('https://pokeapi.co/api/v2')

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});
