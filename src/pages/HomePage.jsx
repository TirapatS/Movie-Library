import Container from 'react-bootstrap/Container'
import { Link }  from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

function HomePage() {
  
  return (
      <Container>
        <Row md={2} xs={1} className="">
          <div className="my-5 welcomeTextContainer">
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                <h1>Discover Movies</h1>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Button variant="primary" className="textStyle my-3 myLink" as={Link} to="/now-playing">Now Playing</Button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Button variant="primary" className="textStyle my-3 myLink" as={Link} to="/popular-movies">Popular Movies</Button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Button variant="primary" className="textStyle my-3 myLink" as={Link} to="/top-rated-movies">Top Rated Movies</Button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="my-5 welcomeTextContainer">
          <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                <h1>Discover Peoples</h1>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Button variant="primary" className="textStyle my-3 myLink" as={Link} to="/popular-peoples">Popular Peoples</Button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Row>
      </Container>
  )
}

export default HomePage