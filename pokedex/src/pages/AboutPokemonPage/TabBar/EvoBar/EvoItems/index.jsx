import React from 'react';

import EvoItem from './EvoItem';

const EvoItems = ({ listChain }) => {
  const namesPokemon = ['venusaur', 'ivysaur'];
  // return Array.isArray(listChain) && listChain.length
  //   ? listChain.map((n, index) => (
  //       <div key={index}>
  //         <EvoItem namePokemon={n.species.name} />
  //         <EvoItems listChain={n.evolves_to} />
  //       </div>
  //     ))
  //   : null;
  return namesPokemon.map((item) => <EvoItem namePokemon={item} />);
};

export default EvoItems;
