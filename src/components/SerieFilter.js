import React from 'react'
import MovieCard from './MovieCard'


const SerieFilter = ({fav,setFav,searchTerm, movies}) => {      
  return (  
    <>
     {['1','2','3','4','5'].includes(searchTerm) ?
     movies.filter((el)=>el.categorie==="serie").filter( (val) => val.rate >= searchTerm).map((el,i)=> <MovieCard key={i}  movies={el}/>):
     movies.filter((el)=>el.categorie==="serie").filter( (val) => val.title.toLowerCase().includes(searchTerm.toLowerCase())).map((val,i) => <MovieCard key={i} fav={fav} setFav={setFav} movies={val} />)}
    </>  
  )}
export default SerieFilter