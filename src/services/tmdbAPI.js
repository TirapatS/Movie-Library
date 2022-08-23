import axios from 'axios'


axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const API_ACCESS = "?api_key=" + process.env.REACT_APP_API_KEY

const get = async (endpoint) => {
	const res = await axios.get(endpoint)

	return res.data
}

const getPoster = (endpoint) => {
    return `https://image.tmdb.org/t/p/w500${endpoint}`
}

const getLatestMovies = () => {
    return get('movie/latest' + API_ACCESS + "&include_adult=false" + "&page=1")
}

const getPopularMovies = async () => {
    return await get('movie/popular' + API_ACCESS + "&include_adult=false" + "&page=1")
}

const getTopRatedMovies = () => {
    return get('movie/top_rated' + API_ACCESS + "&include_adult=false")
}

const getPopularPeoples = () => {
    return get('person/popular' + API_ACCESS)
}

const getGenres = async () => {
    return await get('genre/movie/list' + API_ACCESS)
}

const getDiscoverMovie = async (id) => {
    return await get(`discover/movie') + API_ACCESS + "&with_genres" + ${id}`)
}

const exports = {
    getPoster,
    getLatestMovies,
    getPopularMovies,
    getTopRatedMovies,
    getPopularPeoples,
    getGenres,
    getDiscoverMovie,
}

export default exports