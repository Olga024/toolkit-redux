import { createSlice } from '@reduxjs/toolkit';

export interface Movie {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
}

export interface MoviesState {
    movies: Movie[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: MoviesState = {
    movies: [],
    status: 'idle',
    error: null,
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies(state, action) {
            state.movies = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const { setMovies, setStatus, setError } = moviesSlice.actions;

export const selectMovies = (state: { movies: MoviesState }) => state.movies.movies;
export const selectMovieById = (id: string) => (state: { movies: MoviesState }) =>
    state.movies.movies.find((movie) => movie.imdbID === id);

export default moviesSlice.reducer;