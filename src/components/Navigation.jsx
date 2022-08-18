import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, NavLink } from 'react-router-dom'
import navBg from '../assets/scss/Navbar.scss'


const Navigation = () => {

	return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="navBg">
        <Container>
          <Navbar.Brand as={Link} to="/"><h2>Movie Library</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <NavDropdown title="Movies" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/latest-movies">Latest Movies</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/popular-movies">
                  Popular Movies
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/top-rated-movies">Top Rated Movies</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Peoples" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/popular-movies">Popular Peoples</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
	)
}

export default Navigation