import { useQuery } from 'react-query'
import Container from 'react-bootstrap/Container'
import '../assets/css/HomePage.css'
import tmdbAPI from '../services/tmdbAPI'
import MovieList from '../components/MovieList'

function NowPlaying() {
    const { data: movies, isError,error, isLoading } = useQuery('nowPlaying', tmdbAPI.getNowPlaying)
    console.log("data", movies)
  return (
    <>
      <Container className="mb-5">
        <h2>Now playing</h2>
      </Container>

      {isLoading && (<p>Loading...</p>)}

      {isError && (<p>Error has occurred: {error}</p>)}
      
      {movies && <MovieList data={movies} />}

    </>
  )
}

export default NowPlaying