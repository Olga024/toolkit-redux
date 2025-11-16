import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface MovieCardProps {
    movie: {
        Title: string;
        Year: string;
        Poster: string;
        imdbID: string;
    };
}

const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <Card>
            <CardMedia component="img" image={movie.Poster} alt={movie.Title} />
            <CardContent>
                <Typography variant="h5">{movie.Title}</Typography>
                <Typography variant="body2">{movie.Year}</Typography>
            </CardContent>
        </Card>
    );
};

export default MovieCard;