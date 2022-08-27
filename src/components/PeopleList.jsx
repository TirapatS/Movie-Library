import tmdbAPI from '../services/tmdbAPI'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import '../assets/css/List.css'

const PeopleList = ({data}) => {
  
  /* if true, display data otherwise show this */
  if(!data) {
    return <p>No Peoples to be found</p>
  }

  return (
    <>
      <Row xs={2} md={6} className="g-1 justify-content-center">
        {data?.results && (
            data.results.map(people => (
            <Card key={people.id} className="mx-2 my-2 cardStyle"
            as={Link}
            to={`/people/${people.id}`}
            >
              <Card.Img variant="top" src={tmdbAPI.getImage(people.profile_path)}/>
              <Card.Body>
                <Card.Title>{people.name}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{people.known_for_department}</small>
              </Card.Footer>
            </Card>
          ))
        )}
      </Row>
    </>
  )
}

export default PeopleList