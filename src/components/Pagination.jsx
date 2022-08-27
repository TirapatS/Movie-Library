import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import '../assets/css/List.css'

const Pagination = ({data, activePage, setActivePage}) => {

  return ( 
    <>
        <Container className="my-5 pb-5">
            <div className="mt-3 paginationContainer">

                <Button className="pageButton"
                    disabled={activePage === 1}
                    onClick={() => activePage !== 1 && setActivePage((page) => page - 1)}
                >
                    <p>Prev</p>
                </Button>

                <div>
                    <h3>Page: {activePage} / {data.total_pages}</h3>
                </div>

                <Button className="pageButton"
                    disabled={activePage === data.total_pages}
                    onClick={() => activePage !== data.total_pages && setActivePage((page) => page + 1)}
                >
                    <p>Next</p>
                </Button>
            </div>
        </Container>
    </>
  )
}

export default Pagination