import { useQuery } from 'react-query'
import {useState} from 'react'
import Container from 'react-bootstrap/Container'
import '../assets/css/HomePage.css'
import tmdbAPI from '../services/tmdbAPI'
import MovieList from '../components/MovieList'
import Pagination from '../components/Pagination'

function NowPlaying() {

  const [activePage, setActivePage] = useState(1)

  const { data: movies, isError, error, isLoading} = useQuery(['nowPlaying', activePage], () => tmdbAPI.getNowPlaying(activePage))

  return (
    <>
      <Container className="mb-5">
        <h2>Now playing</h2>
      </Container>

      {isLoading && (<p>Loading...</p>)}

      {isError && (<p>Error has occurred: {error}</p>)}
      
      {movies && <MovieList data={movies} />}

      {movies && <Pagination 
        data={movies} 
        activePage={activePage} 
        setActivePage={setActivePage}
      />}
    </>
  )
}

export default NowPlaying