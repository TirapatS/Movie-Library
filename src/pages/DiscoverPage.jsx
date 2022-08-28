import { useQuery } from 'react-query'
import Container from 'react-bootstrap/Container'
import '../assets/css/HomePage.css'
import tmdbAPI from '../services/tmdbAPI'
import MovieList from '../components/MovieList'
import {useParams, useSearchParams} from 'react-router-dom'
import Pagination from '../components/Pagination'
import Spinner from '../components/LoadingSpinner'


function DiscoverPage() {

  /* setSearchParams with value page : 1 */
  const [searchParams, setSearchParams] = useSearchParams({page : 1})
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : null
  const { id } = useParams()
  
  const { data: movies, isError, error, isLoading, isPreviousData } = useQuery(['discover', {id,page}], tmdbAPI.getDiscover, {keepPreviousData: true})
  console.log("data", movies)


  return (
    <>
      <Container className="mb-5">
        <h2>Discover Movies</h2>
      
        {isLoading && <h2 className="my-5 text-center">Loading <Spinner/></h2>}

        {isError && (<p>Error has occurred: {error}</p>)}
      </Container>

      {/* if true, send data to component */}
      {movies && <MovieList data={movies} />}

      {movies && 
      
      <Pagination
          data={movies}
          page={page}
          isPreviousData={isPreviousData}
          onPrevPage={() => setSearchParams({ page: page - 1})}
          onNextPage={() => setSearchParams({ page: page + 1})}
      />}

    </>
  )
}

export default DiscoverPage