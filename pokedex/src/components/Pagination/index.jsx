import React from 'react';
import './Parination.css';

const Pagination = ({ pokemonsPerPage, totalPokemons, paginate, currentPage }) => {
  const pagesNums = Array.from(Array(Math.ceil(totalPokemons / pokemonsPerPage)), (_, i) => i + 1);
  console.log(pokemonsPerPage);
  return (
    <ul className='pagination'>
      {pagesNums.map((res) => (
        <li
          key={`p${res}`}
          className={currentPage === res ? 'pagination-item pagination-item-en' : 'pagination-item'}
          onClick={() => paginate(res)}
        >
          {res}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
