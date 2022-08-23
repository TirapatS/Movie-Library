import Container from 'react-bootstrap/Container'
import tmdbAPI from '../services/tmdbAPI'
import { useQuery } from 'react-query'

function GenrePage() {

    const { data, isError, isLoading } = useQuery('genre', tmdbAPI.getGenres)
    console.log("got data", data)
   

  return (
    <Container className="my-5">
        <h1>Genres</h1>

        {isLoading && (<p>Loading...</p>)}

        {isError && (<p>Error has occurred</p>)}

        {/* Make it cooler 😎 */}
        {data?.genres && (
           <ul className="listContainer">
            {data.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
            ))}
           </ul>
        )}

    </Container>
  )
}

export default GenrePage