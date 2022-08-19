import axios from 'axios'


axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const API_ACCESS = "?api_key=" + process.env.REACT_APP_API_KEY

const get = async (endpoint) => {
	const res = await axios.get(endpoint)

	return res.data
}

const getLatestMovies = () => {
    return get('movie/latest' + API_ACCESS + "&include_adult=false" + "&append_to_response=images")
}

const getPopularMovies = () => {
    return get('movie/popular' + API_ACCESS + "&include_adult=false" + "&append_to_response=images")
}

const getTopRatedMovies = () => {
    return get('movie/top_rated' + API_ACCESS + "&include_adult=false" + "&append_to_response=images")
}

const getPopularPeoples = () => {
    return get('person/popular' + API_ACCESS + "&append_to_response=images")
}

const getGenres = /* async */ () => {
    return get('genre/movie/list' + API_ACCESS)
}

const exports = {
    getLatestMovies,
    getPopularMovies,
    getTopRatedMovies,
    getPopularPeoples,
    getGenres
}

export default exports