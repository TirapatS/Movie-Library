import { useQuery } from 'react-query'
import {useState} from 'react'
import {useSearchParams} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import '../assets/css/HomePage.css'
import tmdbAPI from '../services/tmdbAPI'
import MovieList from '../components/MovieList'
import Pagination from '../components/Pagination'

function NowPlaying() {

  const [searchParams, setSearchParams] = useSearchParams({page : 1})
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : null

  const { data: movies, isError, error, isLoading, isPreviousData} = useQuery(['nowPlaying', {page}], tmdbAPI.getNowPlaying, {keepPreviousData: true})

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
        page={page}
        isPreviousData={isPreviousData}
        onPrevPage={() => setSearchParams({ page: page - 1})}
				onNextPage={() => setSearchParams({ page: page + 1})}
      />}
    </>
  )
}

export default NowPlaying