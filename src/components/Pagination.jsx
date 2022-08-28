import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import '../assets/css/List.css'

const Pagination = ({data, page, isPreviousData, onPrevPage, onNextPage}) => {

  return ( 
    <>
        <Container className="my-5">
            <div className="mt-3 paginationContainer">

                <Button className="pageButton"
                    disabled={isPreviousData || page === 1}
                    onClick={onPrevPage}
                >
                    <p>Prev</p>
                </Button>

                <div className="pageInfo">
                    <h3>Page: {page} / {data.total_pages} </h3>
                </div>

                <Button className="pageButton"
                    disabled={isPreviousData || page === data.total_pages}
                    onClick={onNextPage}
                >
                    <p>Next</p>
                </Button>
            </div>
        </Container>
    </>
  )
}

export default Pagination