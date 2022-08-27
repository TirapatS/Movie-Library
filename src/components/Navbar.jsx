import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import '../assets/css/Navbar.css'



const Navigation = () => {

	return (
        <div className="navBg">
          <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/">
                <h2 className="mb-0">Movie Library</h2>
                <p className="source">sourced by TMDB</p>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                  <NavDropdown title="Movies" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/now-playing">Now Playing</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/popular-movies">
                      Popular Movies
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/top-rated-movies">Top Rated Movies</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Peoples" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/popular-peoples">Popular Peoples</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/genre">Genres</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
	)
}

export default Navigation