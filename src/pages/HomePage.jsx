import Container from 'react-bootstrap/Container'
import { Link }  from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

function HomePage() {
  
  return (
      <Container>
        <Row md={3} xs={1} className="justify-content-center">
          <div className="my-5 welcomeTextContainer">
            <h3 className="textStyle">Discover Movies</h3>
            <Button variant="dark" className="textStyle my-3 myLink" as={Link} to="/latest-movies">Latest Movies</Button>
            <Button variant="dark" className="textStyle my-3 myLink" as={Link} to="/popular-movies">Popular Movies</Button>
            <Button variant="dark" className="textStyle my-3 myLink" as={Link} to="/top-rated-movies">Top Rated Movies</Button>
          </div>

          <div className="my-5 welcomeTextContainer">
            <h3 className="textStyle">Discover Peoples</h3>
            <Button variant="dark" className="textStyle my-3 myLink" as={Link} to="/popular-peoples">Popular Peoples</Button>
          </div>
        </Row>
      </Container>
  )
}

export default HomePage