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

function App() {
    return (
		<div id="App">

            <Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/genres" element={<GenrePage />} />
				<Route path="/popular-movies" element={<PopularMoviesPage />} />
				<Route path="/now-playing" element={<NowPlayingPage />} />
				<Route path="/top-rated-movies" element={<TopRatedPage />} />
				<Route path="/popular-peoples" element={<PopularPeoplePage />} />
			</Routes>
		</div>
	)
}

export default App