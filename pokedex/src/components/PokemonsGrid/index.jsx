import React from 'react'
import PokemonsListItem from '../PokemonListItem'
import PokemonCard from '../PokemonCard'
import { useState } from 'react'
import './PokemonsGrid.css'

function PokemonsGrid({ pokemonsList }) {
  // const [isShown, setIsShown] = useState(false)
  // const [currentPokemon, setCurrentPokemon] = useState()
  return (
    <>
      {/* <div className="pokemon-list">
        {pokemonsList.map((item) => {
          return (
            <>
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
            </>
          )
        })}
      </div> */}
      {pokemonsList.map((item) => {
        return <PokemonCard item={item} />
      })}
    </>
  )
}

export default PokemonsGrid
