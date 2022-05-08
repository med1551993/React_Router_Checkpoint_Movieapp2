import React from 'react'
import { useState,useId } from 'react'
import Add from './Add'
import MovieFilter from './MovieFilter'
import SerieFilter from './SerieFilter'
import Movies from './Movies'
import Nav from './Nav'
import {Route, Routes} from 'react-router-dom';
import Series from './Series'
import Favories from './Favories'
import Details from './Details'

const MovieList = () => {
  const [show, setShow] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([
    { id: useId(),
      title: "Game of thrones",
      description: "Genre : Fantasy",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61r-vt0bLZL._AC_SX522_.jpg",
      rate: "3",
      categorie: 'movie',
    },
    { id: useId(),
      title: "Breaking bad",
      description:
        "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
      rate: "4",
      categorie: 'movie',
    },
    { id: useId(),
      title: "hunter x hunter",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg",
      rate: "5",
      categorie: 'movie',
    },
    { id: useId(),
      title: "movie 1",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNzU4NWEwNDItMzMzYy00ZDYyLWIxZjMtMDlkYWVjNjQwYzBjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      rate: "5",
      categorie: 'movie',
    }, 
    { id: useId(),
      title: "Free guy",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://i.ytimg.com/vi/N2R2bjxjcS0/movieposter_en.jpg",
      rate: "3.5",
      categorie: 'movie',
    },
    { id: useId(),
      title: "Adam's family ",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://www.miconcinemas.com/media/1712/webtheaddamsfamily2_payoffposter_resizewidth-800.jpg",
      rate: "4",
      categorie: 'movie',
    },

    { id: useId(),
      title: "Prison Break",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl: 
      'https://fr.web.img5.acsta.net/pictures/17/05/22/16/49/588696.jpg',
      rate: "3",
      categorie: 'serie',
    },
    { id: useId(),
      title: "La Casa De Papel",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
      'https://imgsrc.cineserie.com/2017/04/1481703.jpg?ver=1',
      rate: "4",
      categorie: 'serie',
    },
    { id: useId(),
      title: "Squid Game ",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
      'https://fr.web.img6.acsta.net/pictures/21/09/14/10/18/1090569.jpg',
      rate: "4.5",
      categorie: 'serie',
    },
    { id: useId(),
      title: "Extracurricular  ",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
      'https://fr.web.img6.acsta.net/pictures/20/03/23/12/03/4111030.jpg',
      rate: "3.5",
      categorie: 'serie',
    },
    { id: useId(),
      title: "Lost ",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
      'https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
      rate: "4",
      categorie: 'serie',
    },

  ]);
  const [fav,setFav]=useState([
   
  ]);
  const addmovie = (movie) => setMovies([movie, ...movies])
  return (
    <div className='List'>
      <Nav setSearchTerm={setSearchTerm} />
     
      <Add show={show} setShow={setShow} addmovie={addmovie} />
      <Routes>
        <Route index element={<Movies MovieFilter={MovieFilter} searchTerm={searchTerm} setSearchTerm={setSearchTerm} movies={movies} setShow={setShow} />} />

        <Route path="/Movies" element={<Movies fav={fav} setFav={setFav} MovieFilter={MovieFilter} searchTerm={searchTerm} setSearchTerm={setSearchTerm} movies={movies} setShow={setShow} />} />
        <Route path="/Series" element={<Series fav={fav} setFav={setFav} SerieFilter={SerieFilter} searchTerm={searchTerm} setSearchTerm={setSearchTerm} movies={movies} setShow={setShow} />} />
        <Route path="/Favories" element={<Favories fav={fav} setFav={setFav}/>} />
        <Route path="/Details/:id/:title" element={<Details movies={movies} />} />
      </Routes>

    </div>

  )
}

export default MovieList