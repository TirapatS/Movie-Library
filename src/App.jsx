import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Navigation from './components/Navigation'
import './assets/scss/App.scss'


function App() {
    return (
		<div id="App">

            <Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App