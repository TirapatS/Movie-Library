import { useQuery } from 'react-query'
import '../assets/css/HomePage.css'
import Container from 'react-bootstrap/Container'
import tmdbAPI from '../services/tmdbAPI'
import PeopleList from '../components/PeopleList'

function PopularPeoplePage() {
    const { data: peoples, isError,error, isLoading } = useQuery('genre', tmdbAPI.getPopularPeoples)
    console.log("data", peoples)
  return (
    <>
       <Container className="mb-5">
        <h2>Popular Peoples</h2>
        </Container>

      {isLoading && (<p>Loading...</p>)}

      {isError && (<p>Error has occurred: {error}</p>)}
      
      {peoples && <PeopleList data={peoples} />}

    </>
  )
}

export default PopularPeoplePage