import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ fav, setFav, movies }) => {


  return (
    <div className='card'>
      <Link to={`/movielist/Details/${movies.id}/${movies.title}`}>
        <img src={movies.posterUrl} alt='' />
      </Link>
      <p> &nbsp;⭐ {movies.rate}</p>
      <p> &nbsp; {movies.title}</p>

      {/*  <div className='description'>{movies.description}</div> */}

      {/* {console.log(fav.filter(el => {
        return el.id === movies.id;
      }))} */}

      <button className='fa-solid fa-heart-circle-check' onClick={() => {
        
          fav.filter(el => el.id == movies.id).length == 0 && setFav([movies, ...fav])

      
      }}></button>
    </div>
  )
}

export default MovieCard