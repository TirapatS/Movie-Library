import { useQuery } from 'react-query'
import '../assets/css/HomePage.css'
import Container from 'react-bootstrap/Container'
import tmdbAPI from '../services/tmdbAPI'
import MovieList from '../components/MovieList'

function PopularMoviesPage() {
    const { data: movies, isError,error, isLoading } = useQuery('popularMovies', tmdbAPI.getPopularMovies)
    console.log("data", movies)
  return (
    <>
       <Container className="mb-5">
        <h2>Popular Movies</h2>
        </Container>

      {isLoading && (<p>Loading...</p>)}

      {isError && (<p>Error has occurred: {error}</p>)}
      
      {movies && <MovieList data={movies} />}

    </>
  )
}

export default PopularMoviesPage