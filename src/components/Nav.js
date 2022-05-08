import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({setSearchTerm}) => {
  return (
    <div className='nav'>    
          <input type='text' placeholder=' search by title/rate...' onChange={(event) => setSearchTerm(event.target.value)}  />    
          <i class="fa-solid fa-magnifying-glass"></i> 
         <ul>
           <li> <Link to="/movielist/Movies">Movies</Link> </li>
           <li> <Link to="/movielist/Series">Series</Link> </li>
           <li> <Link to="/movielist/Favories">Favories</Link> </li>
           
         </ul>
    </div> 
  )
}

export default Nav