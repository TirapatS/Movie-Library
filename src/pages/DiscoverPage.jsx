import { useQuery } from 'react-query'
import Container from 'react-bootstrap/Container'
import '../assets/css/HomePage.css'
import tmdbAPI from '../services/tmdbAPI'
import MovieList from '../components/MovieList'
import {useParams} from 'react-router-dom'

function DiscoverPage() {
  const { id } = useParams()
  const { data: movies, isError, error, isLoading } = useQuery(['discover', id], () => tmdbAPI.getDiscover(id))

  return (
    <>
      <Container className="mb-5">
        <h2>Discover Movies</h2>
      </Container>

      {isLoading && (<p>Loading...</p>)}

      {isError && (<p>Error has occurred: {error}</p>)}
      
      {movies && <MovieList data={movies} />}

    </>
  )
}

export default DiscoverPage