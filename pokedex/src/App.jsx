import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './redux/actions'

function App(props) {
  const [listPokemons, setListPokemons] = useState()
  const list = useSelector((state) => {
    const { getPokemosReduser } = state
    return getPokemosReduser.pokemons
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPokemons())
  }, [])
  console.log(list)

  return (
    <>
      <p>
        <ol>
          {list.map((res) => {
            return <li>{res.name}</li>
          })}
        </ol>
      </p>
    </>
  )
}

export default App
