import tmdbAPI from '../services/tmdbAPI'
import { useQuery } from 'react-query'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import '../assets/css/HomePage.css'


function HomePage() {
  /* HomePage visar alltid popularMovies */
  const { data: movies, isError, isLoading } = useQuery('genre', tmdbAPI.getPopularMovies)
  console.log("data", movies)
  
  return (
    <>
      <Container>
          <div className="my-5 welcomeTextContainer">
            <h2 className="welcomeText">Discover Unlimited Movies</h2>
          </div>

          {isLoading && (<p>Loading...</p>)}

          {isError && (<p>Error has occurred</p>)}
      </Container>
          <>
            <Row xs={2} md={6} className="g-1 justify-content-center">
              {movies?.results && (
                  movies.results.map(movie => (
                  <Card key={movie.id} className="mx-2 my-2">
                    <Card.Img variant="top" src={tmdbAPI.getPoster(movie.poster_path)}/>
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

            <Container>
              <div className="d-flex justify-content-between mt-3">
                      <Button className="ml-5">
                        Previous Page
                      </Button>

                      <div id="pageCounter">
                        <h3>Page</h3>
                      </div>

                      <Button>
                        Next Page
                      </Button>
              </div>
            </Container>
          </>
    </>
   
  )
}

export default HomePage