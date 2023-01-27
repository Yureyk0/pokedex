import React from 'react'
import { useState } from 'react'

function PokemonCard({ item }) {
  const [isShown, setIsShown] = useState(false)
  const [currentPokemon, setCurrentPokemon] = useState()
  return (
    <>
      <div className="pokemon-list">
        <div
          className="pokemon-item-li"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <div className="pokemon-item-li-left-content">
            <img
              src={item.sprites.front_default}
              alt={item.sprites.front_default}
            />
            <p>{`№ ${item.id}`}</p>
          </div>
          <p>{item.name.toUpperCase()}</p>
        </div>
        {isShown && <div className="right-pokemon-card">{item.name}</div>}
      </div>
    </>
  )
}

export default PokemonCard
