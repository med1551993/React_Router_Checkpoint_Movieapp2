import React from 'react'

const Movies = ({ fav,setFav,MovieFilter,searchTerm,setSearchTerm,movies,setShow}) => {
  return (
    <div className='cards'> 
         <MovieFilter fav={fav} setFav={setFav} searchTerm={searchTerm} movies={movies} />
         <button className='card card1' onClick= {() => setShow(true)}> <p>+</p> </button>
    </div>   
  )
}

export default Movies