import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, NavLink } from 'react-router-dom'
import navBg from '../assets/scss/Navbar.scss'


const Navigation = () => {

	return (
        <Navbar className="navBg" variant="dark" expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/"><h2 className="">Movie-Library</h2></Navbar.Brand>
            </Container>
        </Navbar>
	)
}

export default Navigation