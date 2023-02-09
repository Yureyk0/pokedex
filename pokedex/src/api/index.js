import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

try {
  const allPokemon = await api.get('/pokemon?limit=100');
  const pokemonData = await Promise.all(
    allPokemon.data.results.map(async (pokemon) => {
      const pokemonRecord = await axios.get(pokemon.url);

      return pokemonRecord.data;
    })
  );
} catch (err) {
  console.log(err);
}
