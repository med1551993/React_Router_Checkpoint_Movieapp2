import React from 'react'
import { useParams } from 'react-router-dom';

const Details = ({ movies }) => {
  const params=useParams();
  const movie = movies.find( (el) => el.id == params.id);
  return (
    <div className='details'>
      <div className='details1'>
        <img src={movie.posterUrl} alt='' />
      </div>
      <div className='details2'>
        <p><span>Title</span>&nbsp; {movie.title}</p>
        <hr />
        <p> <span>Description &nbsp;   </span> {movie.description}</p>
        <hr />
        <p><span>Rate</span> &nbsp; {movie.rate} ⭐</p>
        <hr />
      </div>
    </div>
  )
}

export default Details