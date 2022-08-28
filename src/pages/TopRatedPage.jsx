import { useQuery } from 'react-query'
import '../assets/css/HomePage.css'
import {useSearchParams} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import tmdbAPI from '../services/tmdbAPI'
import MovieList from '../components/MovieList'
import Pagination from '../components/Pagination'
import Spinner from '../components/LoadingSpinner'

function TopRatedPage() {

  const [searchParams, setSearchParams] = useSearchParams({page : 1})
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : null

  const { data: movies, isError,error, isLoading, isPreviousData } = useQuery(['topRated', {page}],tmdbAPI.getTopRatedMovies, {keepPreviousData: true})

  return (
    <>
       <Container className="mb-5">
        <h2>Top Rated Movies</h2>
        
        {isLoading &&  <h2 className="my-5 text-center">Loading <Spinner/></h2>}

        {isError && (<p>Error has occurred: {error}</p>)}
      </Container>
      
      {movies && <MovieList data={movies} />}

      {movies && <Pagination 
        data={movies} 
        page={page}
        isPreviousData={isPreviousData}
        onPrevPage={() => setSearchParams({ page: page - 1})}
        onNextPage={() => setSearchParams({ page: page + 1})}
      />}
    </>
  )
}

export default TopRatedPage