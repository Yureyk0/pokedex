import React from 'react'
import PokemonCard from '../PokemonCard'

function PokemonsGrid({ pokemonsList }) {
  return (
    <>
      <ol>
        {pokemonsList.map((res) => {
          return <PokemonCard key={res.id} item={res} />
        })}
      </ol>
    </>
  )
}

export default PokemonsGrid
