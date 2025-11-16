import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMovieById } from '../features/movies/moviesSlice';
import { MovieDetails } from '../components/MovieDetails';

type TMovieDetailsParams = {
  id: string;
};

const MovieDetailsPage = () => {
    const { id } = useParams<TMovieDetailsParams>();
    const movie = useSelector(selectMovieById(id));

    return (
        <div>
            {movie && <MovieDetails movie={movie} />}
        </div>
    );
};

export default MovieDetailsPage; 