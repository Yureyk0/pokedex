import React from 'react';
import { useState } from 'react';
import PokemonCard from '../PokemonCard';
import './PokemonGrid.css';

function PokemonGrid({ item }) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className='pokemonGrid'>
      <div className='pokemon-list'>
        <div
          className='pokemon-item-li li-flex'
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <div className='pokemon-item-li-left-content li-flex'>
            <img src={item.sprites.front_default} alt={item.sprites.front_default} />
            <p>{`Id. ${item.id}`}</p>
          </div>
          <p>{item.name.toUpperCase()}</p>
        </div>
      </div>
      {isShown && <PokemonCard item={item} />}
    </div>
  );
}

export default PokemonGrid;
