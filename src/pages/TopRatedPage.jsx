import { useQuery } from 'react-query'
import '../assets/css/HomePage.css'
import {useState} from 'react'
import Container from 'react-bootstrap/Container'
import tmdbAPI from '../services/tmdbAPI'
import MovieList from '../components/MovieList'
import Pagination from '../components/Pagination'

function TopRatedPage() {

  const [activePage, setActivePage] = useState(1)

  const { data: movies, isError,error, isLoading } = useQuery(['topRated', activePage], () => tmdbAPI.getTopRatedMovies(activePage))

  return (
    <>
       <Container className="mb-5">
        <h2>Top Rated Movies</h2>
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

export default TopRatedPage