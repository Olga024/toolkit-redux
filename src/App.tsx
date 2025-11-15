import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Search } from './components/Search';
import { MovieDetailsPage } from './pages/MovieDetailsPage';
import { FavoritesPage } from './pages/FavoritesPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/film/:id" element={<MovieDetailsPage/>} />
        <Route path="/favorites" element={<FavoritesPage/>} />
        <Route  path="*" element={<Search/>} />
      </Routes>
    </Router>
  )
}

export default App
