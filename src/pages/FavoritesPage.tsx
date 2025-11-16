import { useSelector } from 'react-redux';
import { selectFavorites } from '../features/favorites/favoritesSlice';
import MovieCard from '../components/MovieCard';

const FavoritesPage = () => {
    const favorites = useSelector(selectFavorites);

    return (
        <div>
            {favorites.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
    );
};

export default FavoritesPage;