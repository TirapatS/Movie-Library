import axios from 'axios'

axios.defaults.baseURL = 'https://www.themoviedb.org/3/'

const getMovies = async (endpoint) => {
    const res = await axios.get(endpoint) + "?api_key=" + process.env.REACT_APP_API_KEY + "&include_adult=false" + "&append_to_response=images"

    return res.data
}

const getPeople = async (endpoint) => {
    const res = await axios.get(endpoint) + "?api_key=" + process.env.REACT_APP_API_KEY + "&append_to_response=images"

    return res.data
}

const getLatestMovies = () => {
    return getMovies('movie/latest')
}

const getPopularMovies = () => {
    return getMovies('movie/popular')
}

const getTopRatedMovies = () => {
    return getMovies('movie/top_rated')
}

const getPopularPeoples = () => {
    return getPeople('person/popular')
}

const exports = {
    getLatestMovies,
    getPopularMovies,
    getTopRatedMovies,
    getPopularPeoples
}

export default exports