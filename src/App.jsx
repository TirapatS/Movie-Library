import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from './components/Navbar'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import GenrePage from './pages/GenrePage'
import PopularMoviesPage from './pages/PopularMoviesPage'
import NowPlayingPage from './pages/NowPlayingPage'
import TopRatedPage from './pages/TopRatedPage'
import PopularPeoplePage from './pages/PopularPeoplePage'
import MoviePage from './pages/MoviePage'
import ProfilePage from './pages/ProfilePage'
import DiscoverPage from './pages/DiscoverPage'

function App() {
    return (
		<div id="App">

            <Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/genre" element={<GenrePage />} />
				<Route path="/popular-movies" element={<PopularMoviesPage />} />
				<Route path="/now-playing" element={<NowPlayingPage />} />
				<Route path="/top-rated-movies" element={<TopRatedPage />} />
				<Route path="/popular-peoples" element={<PopularPeoplePage />} />
				<Route path="/movie/:id" element={<MoviePage />} />
				<Route path="/people/:id" element={<ProfilePage />} />
				<Route path="/discover/:id" element={<DiscoverPage />} />
			</Routes>
		</div>
	)
}

export default App