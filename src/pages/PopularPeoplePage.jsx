import { useQuery } from 'react-query'
import {useState} from 'react'
import '../assets/css/HomePage.css'
import Container from 'react-bootstrap/Container'
import tmdbAPI from '../services/tmdbAPI'
import PeopleList from '../components/PeopleList'
import Pagination from '../components/Pagination'

function PopularPeoplePage() {
  
  const [activePage, setActivePage] = useState(1)

  const { data: peoples, isError,error, isLoading } = useQuery(['popularPeoples', activePage], () => tmdbAPI.getPopularPeoples(activePage))

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
        activePage={activePage} 
        setActivePage={setActivePage}
      />}
    </>
  )
}

export default PopularPeoplePage