import React from 'react'
import FavorieCard from './FavorieCard'


const Favories = ({fav,setFav}) => {
 
  return(
  <div className='cards'>  
        {fav.length === 0 ? <h2>No Favories</h2> :
         fav.map((el,i)=><FavorieCard key={i} setFav={setFav} fav={fav} movies={el}/>)}
    </div>  
  )
}

export default Favories