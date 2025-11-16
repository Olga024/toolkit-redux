import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchMovies } from './moviesApi';
import { setMovies, setStatus, setError } from './moviesSlice';

export const fetchMovies = createAsyncThunk<void, string>(
    'movies/fetchMovies',
    async (query: string, { dispatch }) => {
        try {
            dispatch(setStatus('loading'));
            const movies = await searchMovies(query);
            dispatch(setMovies(movies));
            dispatch(setStatus('succeeded'));
        } catch (error) {
            dispatch(setError('Failed to fetch movies'));
            dispatch(setStatus('failed'));
        }
    }
);