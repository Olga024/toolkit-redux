import { Card, CardMedia, CardContent, Typography } from '@mui/material';

type TMovieDetailsProps = {
    movie: {
        Title: string;
        Year: string;
        Poster: string;
        Genre: string;
        Runtime: string;
        Director: string;
        Actors: string;
        imdbRating: string;
    };
};

export const MovieDetails = ({ movie }: TMovieDetailsProps) => {
    return (
        <Card>
            <CardMedia component="img" image={movie.Poster} alt={movie.Title} />
            <CardContent>
                <Typography variant="h5">{movie.Title}</Typography>
                <Typography variant="body2">Year: {movie.Year}</Typography>
                <Typography variant="body2">Genre: {movie.Genre}</Typography>
                <Typography variant="body2">Runtime: {movie.Runtime}</Typography>
                <Typography variant="body2">Director: {movie.Director}</Typography>
                <Typography variant="body2">Actors: {movie.Actors}</Typography>
                <Typography variant="body2">IMDb Rating: {movie.imdbRating}</Typography>
            </CardContent>
        </Card>
    );
};