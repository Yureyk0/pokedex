import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getEvolutionPokemon } from '../../../../redux/actions/actions';
import { usePokemonEvolutionSelector } from '../../../../redux/selector';
import EvoItems from './EvoItems';

import './EvoBar.css';

const EvoBar = ({ idPokemon }) => {
  const dispatch = useDispatch();

  const evoPokemon = useSelector(usePokemonEvolutionSelector);

  useEffect(() => {
    dispatch(getEvolutionPokemon(idPokemon));
  }, []);

  if (!Object.keys(evoPokemon).length) return <div>Loading</div>;

  const listCainTo = evoPokemon.chain.evolves_to;

  return (
    <div>
      <div></div>
      <EvoItems listChain={evoPokemon.chain.evolves_to} />
    </div>
  );
};

export default EvoBar;
