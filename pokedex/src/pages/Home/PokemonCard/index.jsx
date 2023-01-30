import React from 'react';
import './PokemonCard.css';

function PokemonCard({ item }) {
  console.log('item>>>', item);
  return (
    <div className='pokemon-card'>
      <div className='pokemon-card-top-block'>
        <div className='title-block'>
          <p className='title-id'>#{item.id}</p>
          <p className='title-name'>{item.name.toUpperCase()}</p>
        </div>
        <img src={item.sprites.other['official-artwork'].front_default} alt={item.name} />
      </div>

      <table className='block-main-stats'>
        <tr>
          <th>Type</th>
          <td>{item.types.map((type) => `${type.type.name} `)}</td>
        </tr>
        <tr>
          <th>Height</th>
          <td>{item.height}</td>
        </tr>
        <tr>
          <th>Weight</th>
          <td>{item.weight} Lbs</td>
        </tr>
      </table>
    </div>
  );
}

export default PokemonCard;
