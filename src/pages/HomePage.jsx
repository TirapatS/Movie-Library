import Container from 'react-bootstrap/Container'
function HomePage() {
  
  return (
      <Container>
        <div className="d-flex justify-content-around text-center">
          <div className="my-5 mx-2 welcomeTextContainer">
            <h2 className="textStyle">Discover Movies</h2>
            <h4 className="textStyle my-3">Latest Movies</h4>
            <h4 className="textStyle my-3">Popular Movies</h4>
            <h4 className="textStyle my-3">Top Rated Movies</h4>
          </div>

          <div className="my-5 mx-2 welcomeTextContainer">
            <h2 className="textStyle">Discover Peoples</h2>
            <h4 className="textStyle my-3">Popular Peoples</h4>
          </div>
        </div>
      </Container>
  )
}

export default HomePage