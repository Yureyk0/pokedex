import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../redux/actions';
import TabBar from './TabBar';
import './AboutPokemonPage.css';

function AboutPokemonPage() {
  const dispatch = useDispatch();
  let { id } = useParams();

  const pokemon = useSelector((state) => {
    const { getPokemonReduser } = state;
    return getPokemonReduser.pokemon;
  });

  useEffect(() => {
    dispatch(getPokemon(id));
  }, []);
  console.log('pokemon>>', pokemon);

  return (
    pokemon.id && (
      <div className='container-about'>
        <div className='about-title-pokemon'>
          <div className='name-pokemon'>{pokemon.name}</div>
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
    )
  );
}

export default AboutPokemonPage;
