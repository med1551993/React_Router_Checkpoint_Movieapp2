import React from 'react'

const Series = ({fav,setFav,SerieFilter,searchTerm,setSearchTerm,movies,setShow}) => {
  return (
    <div className='cards'> 
         <SerieFilter fav={fav} setFav={setFav} searchTerm={searchTerm} movies={movies} />
         <button className='card card1' onClick= {() => setShow(true)}> <p>+</p> </button>
      </div> 
  )
}

export default Series