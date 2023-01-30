import React from 'react';
import { useState } from 'react';
import uniqid from 'uniqid';
import './TabBar.css';

function TabBar({ pokemon }) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className='tabbar-container'>
      <div className='bloc-tabs'>
        <button className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>
          Pokedex
        </button>
        <button className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>
          Stats
        </button>
        <button className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(3)}>
          Tab 3
        </button>
      </div>
      <div className='content-tabs'>
        <div className={toggleState === 1 ? 'content  active-content' : 'content'}>
          <div className='tab-type-block'>
            <div className='tab-type-title'>Type</div>
            <div className='tab-type-items'>
              {pokemon.types.map((type) => {
                return (
                  <div key={uniqid()} className='tab-type-item'>
                    {type.type.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className='tab-type-block'>
            <div className='tab-type-title'>Height</div>
            <div className='tab-type-items'>
              <div>{`${pokemon.height} yards`}</div>
            </div>
          </div>
          <div className='tab-type-block'>
            <div className='tab-type-title'>Weight</div>
            <div className='tab-type-items'>
              <div>{`Ibc ${pokemon.weight}`}</div>
            </div>
          </div>
          <div className='tab-abilities-block'>
            <div className='tab-type-title'>Abilities</div>
            <ul>
              {pokemon.abilities.map((ability) => {
                return (
                  <li key={uniqid()}>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}</li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={toggleState === 2 ? 'content  active-content' : 'content'}>
          {pokemon.stats.map((stat) => {
            return (
              <div className='tab-type-block' key={uniqid()}>
                <div className='tab-type-title'>{stat.stat.name}</div>
                <div className='tab-type-items stats-value'>
                  <div>{stat.base_stat}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TabBar;
