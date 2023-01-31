import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../redux/actions/actions';
import { usePokemonSelector } from '../../redux/selector';
import TabBar from './TabBar';
import './AboutPokemonPage.css';

const AboutPokemonPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const pokemon = useSelector(usePokemonSelector);

  useEffect(() => {
    dispatch(getPokemon(id));
  }, []);

  if (!Object.keys(pokemon).length) return <div>Loading</div>;

  return (
    <div className='container-about'>
      <div className='about-title-pokemon'>
        <div className='name-pokemon'>
          <div className='back-page' onClick={() => navigate(-1)}>
            Back
          </div>
          <div>{pokemon.name.toUpperCase()}</div>
        </div>
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
};

export default AboutPokemonPage;
