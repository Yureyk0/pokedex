import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../redux/actions';
import PokemonGrid from './PokemonGrid';
import Pagination from '../../components/Pagination';

const POKEMONS_PER_PAGE = 10;

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const list = useSelector((state) => {
    const { getPokemosReduser } = state;
    return getPokemosReduser.pokemons;
  });

  const lastPokemonIndex = currentPage * POKEMONS_PER_PAGE;
  const firstPokemonIndex = lastPokemonIndex - POKEMONS_PER_PAGE;
  const currentPokemon = list.slice(firstPokemonIndex, lastPokemonIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div>
      {currentPokemon.map((item) => {
        return <PokemonGrid key={item.id} item={item} />;
      })}
      <Pagination pokemonsPerPage={POKEMONS_PER_PAGE} totalPokemons={list.length} paginate={paginate} />
    </div>
  );
}

export default Home;
