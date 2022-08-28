import axios from 'axios'


axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const API_ACCESS = "?api_key=" + process.env.REACT_APP_API_KEY

const get = async (endpoint) => {
	const res = await axios.get(endpoint)

	return res.data
}

/* get images based on endpoint */
const getImage = (endpoint) => {
    return `https://image.tmdb.org/t/p/w500${endpoint}`
}


/* get list of now playing movies */
const getNowPlaying = async ({ queryKey }) => {
    const [_key, {page}] = queryKey
    return get('movie/now_playing' + API_ACCESS + "&include_adult=false" + `&page=${page}`)
}

/* get list of popular movies */
const getPopularMovies = async ({ queryKey }) => {
    const [_key, {page}] = queryKey
    return await get('movie/popular' + API_ACCESS + "&include_adult=false" + `&page=${page}`)
}

/* get list of top rated movies */
const getTopRatedMovies = async ({ queryKey }) => {
    const [_key, {page}] = queryKey
    return get('movie/top_rated' + API_ACCESS + "&include_adult=false" + `&page=${page}`)
}

/* Get list popular peoples */
const getPopularPeoples = async ({ queryKey }) => {
    const [_key, {page}] = queryKey
    return get('person/popular' + API_ACCESS + `&page=${page}`)
}

/* Get a list of genres */
const getGenres = async () => {
    return await get('genre/movie/list' + API_ACCESS)
}

/* Get a list of movies based on Genre ID */
const getDiscover = async ({ queryKey }) => {
    const [_key, { page, id }] = queryKey
    return await get("discover/movie" + API_ACCESS + `&with_genres=${id}` + "&include_adult=false" + `&page=${page}`)
}

/* get a movie */
const getMovie = async (id) => {
    return await get(`movie/${id}` + API_ACCESS + "&append_to_response=credits" )
}

/* get profile for person */
const getProfile = async (id) => {
    return await get(`person/${id}` + API_ACCESS + "&append_to_response=combined_credits")
}

const exports = {
    getImage,
    getNowPlaying,
    getPopularMovies,
    getTopRatedMovies,
    getPopularPeoples,
    getGenres,
    getDiscover,
    getMovie,
    getProfile
}

export default exports