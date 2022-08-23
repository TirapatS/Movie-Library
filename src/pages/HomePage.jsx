import React from 'react'
import Container from 'react-bootstrap/Container'
import {welcomeTextContainer, welcomeText} from '../assets/css/WelcomePage.css'


function HomePage() {
  return (
    <Container>
      <div className="my-5 welcomeTextContainer">
        <h2 className="welcomeText">Discover Unlimited Movies</h2>
      </div>

    </Container>
  )
}

export default HomePage