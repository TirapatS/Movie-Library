import tmdbAPI from '../services/tmdbAPI'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import '../assets/css/List.css'

const MovieList = ({data}) => {

  /* if true, display data otherwise say this */
  if(!data) {
    return <p>No Movies to be found</p>
  }

  console.log("data", data)

  return (
    <>
      <Row xs={2} md={6} className="g-1 justify-content-center">
        {data?.results && (
            data.results.map(movie => (
            <Card key={movie.id} className="mx-2 my-2 cardStyle"
              as={Link}
              to={`/movie/${movie.id}`}
            >
              <Card.Img variant="top" src={tmdbAPI.getImage(movie.poster_path)}/>
              <Card.Body>
                <Card.Title>{movie.original_title}</Card.Title>
                <Card.Text>{movie.title}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{movie.release_date}</small>
              </Card.Footer>
            </Card>
          ))
        )}
      </Row>
    </>
  )
}

export default MovieList