import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../redux/actions/actions';
import PokemonGrid from './PokemonGrid';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import { usePokemonsSelector } from '../../redux/selector';

const POKEMONS_PER_PAGE = 10;

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const list = useSelector(usePokemonsSelector);
  const lastPokemonIndex = currentPage * POKEMONS_PER_PAGE;
  const firstPokemonIndex = lastPokemonIndex - POKEMONS_PER_PAGE;
  const currentPokemon = list.slice(firstPokemonIndex, lastPokemonIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  if (!Object.keys(list).length) return <div>Loading</div>;

  return (
    <div className='container'>
      <div className='grid-container'>
        <div className='grid-pokemon-list'>
          {currentPokemon.map((item) => {
            return <PokemonGrid key={item.id} item={item} />;
          })}
        </div>
        <SearchBar listPokemon={list} />
      </div>
      <Pagination
        pokemonsPerPage={POKEMONS_PER_PAGE}
        totalPokemons={list.length}
        paginate={paginate}
        className='paginate'
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;
