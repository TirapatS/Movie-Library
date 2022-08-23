import Container from 'react-bootstrap/Container'
import tmdbAPI from '../services/tmdbAPI'
import { useQuery } from 'react-query'
import ListGroup from 'react-bootstrap/ListGroup'
import {Link} from 'react-router-dom'

function GenrePage() {

    const { data, isError, isLoading } = useQuery('genre', tmdbAPI.getGenres)
    console.log("got data", data)
   

  return (
    <Container className="my-5">

        <h1 className="my-5">Genres</h1>

          {isLoading && (<p>Loading...</p>)}

          {isError && (<p>Error has occurred</p>)}

          {data?.genres && (
            <ListGroup>
              {data.genres.map(genre => (
                <ListGroup.Item
                  action
                  as={Link}
                  key={genre.id}
                  to={`/movies`}
                  variant = "primary"
                >
                  <h4 className="my-2 text-center">{genre.name}</h4>

                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
    </Container>
  )
}

export default GenrePage