import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { MovieDetailsPage } from './pages/MovieDetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  )
}

export default App
