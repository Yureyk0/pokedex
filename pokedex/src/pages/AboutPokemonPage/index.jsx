import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../redux/actions';
import { usePokemonSelector } from '../../redux/selector';
import TabBar from './TabBar';
import './AboutPokemonPage.css';

function AboutPokemonPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const pokemon = useSelector(usePokemonSelector);

  useEffect(() => {
    dispatch(getPokemon(id));
  }, []);

  useEffect(
    () => () => {
      console.log('hui');
    },
    []
  );

  console.log(!Object.keys(pokemon).length, 'pokemon>>', pokemon);

  if (!Object.keys(pokemon).length) return <div>Loading</div>;

  return (
    <div className='container-about'>
      <div className='about-title-pokemon'>
        <div className='name-pokemon'>{pokemon.name.toUpperCase()}</div>
        <div className='id-pokemon'>{`#${pokemon.id}`}</div>
      </div>
      <div className='content-pokemon'>
        <div className='about-left-block'>
          <img src={pokemon.sprites.other['official-artwork'].front_default} alt='' />
        </div>
        <div className='about-right-block'>
          <TabBar pokemon={pokemon} />
        </div>
      </div>
    </div>
  );
}

export default AboutPokemonPage;
