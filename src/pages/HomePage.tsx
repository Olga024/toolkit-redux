import { useSelector } from 'react-redux';
import { selectMovies } from '../features/movies/moviesSlice';
import { Search } from '../components/Search';
import MovieCard from '../components/MovieCard';

const HomePage = () => {
    const movies = useSelector(selectMovies);

    return (
        <div>
            <Search />
            <div>
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;