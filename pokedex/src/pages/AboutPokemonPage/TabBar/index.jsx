import React from 'react';
import { useState } from 'react';
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
          Tab 2
        </button>
        <button className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(3)}>
          Tab 3
        </button>
      </div>
      <div className='content-tabs'>
        <div className={toggleState === 1 ? 'content  active-content' : 'content'}>
          <div className='tab-type'>
            <div>Type</div>
            <div className='tab-type-items'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabBar;
