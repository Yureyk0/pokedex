import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PokemonCard from '../PokemonCard';
import './PokemonGrid.css';

const PokemonGrid = ({ item }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className='pokemonGrid'>
      <Link
        to={`/about/${item.id}`}
        style={{ textDecoration: 'none', display: 'block', width: '100%', color: '#c9d1d9' }}
      >
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
      </Link>

      {isShown && <PokemonCard item={item} />}
    </div>
  );
};

export default PokemonGrid;
