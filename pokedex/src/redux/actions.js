import axios from 'axios'
import {
  GET_POKEMONS,
  GET_POKEMON,
  POKEMONS_LOAD,
  LOADER_DISPLAY_OFF,
  LOADER_DISPLAY_ON,
} from './types'

export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON,
  }
}
export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  }
}

export function getPokemons() {
  return async (dispatch) => {
    try {
      // dispatch(loaderOn())
      const allPokemon = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=100'
      )
      const pokemonData = await Promise.all(
        allPokemon.data.results.map(async (pokemon) => {
          const pokemonRecord = await axios.get(pokemon.url)
          // console.log(pokemonRecord.data)
          return pokemonRecord.data
        })
      )
      dispatch({
        type: POKEMONS_LOAD,
        data: pokemonData,
      })
      // dispatch(loaderOff())
    } catch (err) {
      // dispatch({
      //   err,
      // })
    }
  }
}

// export const getPokemon = (id) => async (dispatch) => {
//   try {
//     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     dispatch({
//       type: GET_POKEMON,
//       payload: res.data,
//     })
//   } catch (err) {
//     dispatch({
//       err,
//     })
//   }
// }
