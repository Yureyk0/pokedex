import React from 'react'

function Pagination({ pokemonsPerPage, totalPokemons, paginate }) {
  let i = 1
  const pagesNums = Array.from(
    { length: Math.ceil(totalPokemons / pokemonsPerPage) },
    () => i++
  )

  return (
    <>
      <ul>
        {pagesNums.map((res) => (
          <li key={`p${res}`} onClick={() => paginate(res)}>
            {res}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Pagination
