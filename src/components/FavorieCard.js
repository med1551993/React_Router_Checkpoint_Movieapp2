import React from 'react'
import { useParams } from 'react-router-dom';


const FavorieCard = ({ movies, setFav, fav }) => {
 const param = useParams();
 const movie = fav.find((el) => el.id == param.id )
//  console.log(movie);

const handledelete=(id)=>{
  console.log(id)
const res=fav.filter((el)=>el.id!=id)
setFav(res)
}
 
  return (
    <div className='card'>
      <img src={movies.posterUrl} alt='' />
      <p> &nbsp;⭐ {movies.rate}</p>
      <p> &nbsp; {movies.title}</p>
      <button className='fa-solid fa-heart-circle-xmark' onClick={()=>handledelete(movies.id)}></button>
    </div>
  )
}

export default FavorieCard