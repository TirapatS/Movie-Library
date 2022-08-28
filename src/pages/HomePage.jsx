import Container from 'react-bootstrap/Container'
import { Link }  from 'react-router-dom'
import Row from 'react-bootstrap/Row'
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
                <Dropdown.Item as={Link} to="/now-playing"><h5 className="py-2">Now Playing</h5>
                </Dropdown.Item>
                <Dropdown.Item className="my-3" as={Link} to="/popular-movies"><h5 className="py-2">Popular Movies</h5>
                </Dropdown.Item>
                <Dropdown.Item className="my-3" as={Link} to="/top-rated-movies"><h5 className="py-2">Top Rated Movies</h5>
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
                <Dropdown.Item className="my-3" as={Link} to="/popular-peoples"><h5 className="py-2">Popular Peoples</h5>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Row>
      </Container>
  )
}

export default HomePage