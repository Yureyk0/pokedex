import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';
import './SearchBar.css';

const SearchBar = ({ listPokemon }) => {
  const namesPokebkons = listPokemon.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    navigate(`/about/${searchTerm}`);
  };

  return (
    <div className='search-container'>
      <div className='search-inner'>
        <input type='text' value={value} onChange={onChange} placeholder='Search pokemon ...' />
        <div className='dropdown'>
          {namesPokebkons
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              return searchTerm && item.name.startsWith(searchTerm) && item.name !== searchTerm;
            })
            .slice(0, 10)
            .map((item) => (
              <div onClick={() => onSearch(item.name)} className='dropdown-row' key={uniqid()}>
                {item.name}
              </div>
            ))}
        </div>
      </div>
      <button onClick={() => onSearch(value)}> Search </button>
    </div>
  );
};

export default SearchBar;
