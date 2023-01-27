import React from 'react'
import './PokemonListItem.css'
// import PokemonCard from '../PokemonCard'

function PokemonsListItem({ item }) {
  console.log('item>>>>>', item)
  return (
    <>
      <div className="pokemon-item-li">
        <div className="pokemon-item-li-left-content">
          <img
            src={item.sprites.front_default}
            alt={item.sprites.front_default}
          />
          <p>{`№ ${item.id}`}</p>
        </div>

        <p>{item.name.toUpperCase()}</p>
      </div>
    </>
  )
}

export default PokemonsListItem
