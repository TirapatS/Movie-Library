import Container from 'react-bootstrap/Container'
import tmdbAPI from '../services/tmdbAPI'
import { useQuery } from 'react-query'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link, useParams} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function GenrePage() {
  
  const { data: genres, isError, isLoading } = useQuery('genre', tmdbAPI.getGenres)   

  return (
    <Container className="my-5">

        <h1 className="my-5">Genres</h1>

          {isLoading && (<p>Loading...</p>)}

          {isError && (<p>Error has occurred</p>)}

          {/* Display all genres */}
          <>
          {genres && 
            <Container>
              <Row md={6} xs={2} className="g-4 text-center">
                {genres?.genres && (
                  genres.genres.map( genre => (
                  <Col key={genre.id}>
                      <Button  
                        as={Link}
                        to={`/discover/${genre.id}`}
                      >{genre.name}</Button>
                  </Col>
                  ))
                )}
              </Row>
            </Container>
          }
          </>
    </Container>
  )
}

export default GenrePage