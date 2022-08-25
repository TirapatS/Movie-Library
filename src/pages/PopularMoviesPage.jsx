import { useQuery } from 'react-query'
import '../assets/css/HomePage.css'
import tmdbAPI from '../services/tmdbAPI'
import MovieList from '../components/MovieList'

function PopularMoviesPage() {
    const { data: movies, isError,error, isLoading } = useQuery('genre', tmdbAPI.getPopularMovies)
    console.log("data", movies)
  return (
    <>
      {isLoading && (<p>Loading...</p>)}

      {isError && (<p>Error has occurred: {error}</p>)}
      
      {movies && <MovieList data={movies} />}

    </>
  )
}

export default PopularMoviesPage