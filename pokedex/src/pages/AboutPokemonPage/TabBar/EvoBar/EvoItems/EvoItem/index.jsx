import React from 'react';
import { useEffect } from 'react';
import { getPokemon } from '../../../../../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import { usePokemonSelector } from '../../../../../../redux/selector';

const EvoItem = ({ namePokemon }) => {
  const dispatch = useDispatch();

  const pokemon = useSelector(usePokemonSelector);
  console.log('evo>>>>>>', pokemon);
  useEffect(() => {
    dispatch(getPokemon(namePokemon));
  }, []);

  return <div>{pokemon.name}</div>;
};

export default EvoItem;
