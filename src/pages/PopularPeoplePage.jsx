import { useQuery } from 'react-query'
import {useSearchParams} from 'react-router-dom'
import '../assets/css/HomePage.css'
import Container from 'react-bootstrap/Container'
import tmdbAPI from '../services/tmdbAPI'
import PeopleList from '../components/PeopleList'
import Pagination from '../components/Pagination'

function PopularPeoplePage() {
  
  const [searchParams, setSearchParams] = useSearchParams({page : 1})
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : null

  const { data: peoples, isError,error, isLoading, isPreviousData } = useQuery(['popularPeoples', {page}], tmdbAPI.getPopularPeoples, {keepPreviousData: true})
  console.log("data", peoples)

  return (
    <>
       <Container className="mb-5">
        <h2>Popular Peoples</h2>
        </Container>

      {isLoading && (<p>Loading...</p>)}

      {isError && (<p>Error has occurred: {error}</p>)}
      
      {/* if true, send data to component */}
      {peoples && <PeopleList data={peoples} />}

      {peoples && <Pagination 
        data={peoples} 
        page={page}
        isPreviousData={isPreviousData}
        onPrevPage={() => setSearchParams({ page: page - 1})}
        onNextPage={() => setSearchParams({ page: page + 1})}
      />}
    </>
  )
}

export default PopularPeoplePage