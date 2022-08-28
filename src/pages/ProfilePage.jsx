import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import '../assets/css/singularPage.css'
import tmdbAPI from '../services/tmdbAPI'
import {Link, useParams} from 'react-router-dom'
import { useQuery } from 'react-query'

function ProfilePage() {

    /* get id from params */
    const { id } = useParams()
    /* search for clicked people with getProfile function and return */
    const {data: people, error, isError, isLoading } = useQuery(['people', id], () => tmdbAPI.getProfile(id))
    
    return (
        <>
            {isLoading && (<h6>Loading</h6>)}

            {isError && (<h6>{error}</h6>)}

            {/* if true, display the person */}
            {people && 
             <Container className="cardContainer">
                    <div className="Card">
                        <div className="imageContainer">
                            <img className="imgStyle" src={tmdbAPI.getImage(people.profile_path)} />
                        </div>
                        <div className="infoContainer">
                            <h3>{people.name}</h3>
                            <h6>{people.known_for_department}</h6>
                            <div className="Info">
                                <h6>{people.birthday}</h6>
                                <h6>{people.place_of_birth}</h6>
                            </div>
                            <h5>Biography</h5>
                            <p>{people.biography}</p>
                            <h6>Status: {people.deathday}</h6>
                        </div>
                    </div>
                    <div>
                        <Container className="related">
                            <h3>Movies & TV-shows</h3>
                        </Container>
                        <Row xs={2} md={6} className="g-1 justify-content-center mt-5 pb-3">
                            {people?.combined_credits.cast && (
                                people.combined_credits.cast.slice(0, 10).map(movie => (
                                <Card key={movie.id} className="mx-2 my-2 cardStyle"
                                as={Link}
                                to={`/movie/${movie.id}`}
                                >
                                <Card.Img variant="top" src={tmdbAPI.getImage(movie.poster_path)}/>
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>{movie.character}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">{movie.release_date}</small>
                                </Card.Footer>
                                </Card>
                            ))
                            )}
                        </Row>
                    </div>
                </Container>
            }
        </>
  )
}

export default ProfilePage