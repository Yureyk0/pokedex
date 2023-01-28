import React from 'react';
import './Parination.css';

function Pagination({ pokemonsPerPage, totalPokemons, paginate }) {
  const pagesNums = Array.from(Array(Math.ceil(totalPokemons / pokemonsPerPage)), (_, i) => i + 1);

  return (
    <ul className='pagination'>
      {pagesNums.map((res) => (
        <li key={`p${res}`} className='pagination-item' onClick={() => paginate(res)}>
          {res}
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
