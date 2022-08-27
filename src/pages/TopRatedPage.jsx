import { useQuery } from 'react-query'
import '../assets/css/HomePage.css'
import Container from 'react-bootstrap/Container'
import tmdbAPI from '../services/tmdbAPI'
import MovieList from '../components/MovieList'

function TopRatedPage() {
    const { data: movies, isError,error, isLoading } = useQuery('genre', tmdbAPI.getTopRatedMovies)
    console.log("data", movies)
  return (
    <>
       <Container className="mb-5">
        <h2>Top Rated Movies</h2>
        </Container>

      {isLoading && (<p>Loading...</p>)}

      {isError && (<p>Error has occurred: {error}</p>)}
      
      {movies && <MovieList data={movies} />}

    </>
  )
}

export default TopRatedPage