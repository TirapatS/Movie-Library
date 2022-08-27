import tmdbAPI from '../services/tmdbAPI'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import '../assets/css/List.css'

const PeopleList = ({data}) => {
    if(!data) {
      return <p>No Peoples to be found</p>
    }

    console.log("data", data.results)

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

      <Container>
        <div className="d-flex justify-content-between mt-3 pageContainer">
          <Button className="ml-5 px-4">
            <p>Prev</p>
          </Button>

          <div id="pageCounter">
            <h3>Page</h3>
          </div>

          <Button className="mr-5 px-4">
            <p>Next</p>
          </Button>
        </div>
      </Container>
    </>
  )
}

export default PeopleList