import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../../redux/actions'
import PokemonsGrid from '../../components/PokemonsGrid'
import Pagination from '../../components/Pagination'

function Home() {
  const [listPokemons, setListPokemons] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonsPerPage] = useState(10)
  const list = useSelector((state) => {
    const { getPokemosReduser } = state
    return getPokemosReduser.pokemons
  })
  // setListPokemons(list)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPokemons())
  }, [])
  console.log(list)

  const lastPokemonIndex = currentPage * pokemonsPerPage
  const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage
  const currentPokemon = list.slice(firstPokemonIndex, lastPokemonIndex)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      <PokemonsGrid pokemonsList={currentPokemon} />
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={list.length}
        paginate={paginate}
      />
    </>
  )
}

export default Home
