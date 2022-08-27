import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import '../assets/css/singularPage.css'
import tmdbAPI from '../services/tmdbAPI'
import {Link, useParams} from 'react-router-dom'
import { useQuery } from 'react-query'

function MoviePage() {
  
    const { id } = useParams()
    const {data: movie, error, isError, isLoading } = useQuery(['movie', id], () => tmdbAPI.getMovie(id))
   

    return (
        <>
            {isLoading && (<h6>Loading</h6>)}

            {isError && (<h6>{error}</h6>)}


            {movie && 
                <Container>
                    <div className="cardContainer">
                        <div className="Card">
                            <div className="imageContainer">
                                <img className="imgStyle" src={tmdbAPI.getImage(movie.poster_path)} />
                            </div>
                            <div className="infoContainer">
                                <h3>{movie.original_title}</h3>
                                <h6>{movie.title}</h6>
                                <div className="Info">
                                    <h6>{movie.release_date}</h6>
                                    <div className="genreContainer">{movie.genres.map( genre => {
                                        return <h6 key={genre.id}>{genre.name}</h6>
                                        })}
                                    </div>
                                    <h6>{Math.floor(movie.runtime / 60)}h <span>{Math.floor(movie.runtime % 60)}</span>min</h6>
                                </div>
                                <h5>Overview</h5>
                                <p>{movie.overview}</p>
                                <h6>Status: {movie.status}</h6>
                            </div>
                        </div>
                        <div>
                            <Container className="related">
                                <h3>Cast</h3>
                            </Container>
                            <Row xs={2} md={6} className="g-1 justify-content-center mt-5 pb-3">
                                {movie?.credits.cast && (
                                    movie.credits.cast.slice(0, 10).map(people => (
                                    <Card key={people.id} className="mx-2 my-2 cardStyle"
                                    as={Link}
                                    to={`/people/${people.id}`}
                                    >
                                    <Card.Img variant="top" src={tmdbAPI.getImage(people.profile_path)}/>
                                    <Card.Body>
                                        <Card.Title>{people.name}</Card.Title>
                                        <Card.Text>{people.character}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">{people.known_for_department}</small>
                                    </Card.Footer>
                                    </Card>
                                ))
                                )}
                            </Row>
                        </div>
                    </div>
                </Container>
            }
        </>
    )
}

export default MoviePage