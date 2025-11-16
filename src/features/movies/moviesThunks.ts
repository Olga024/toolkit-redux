import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchMovies, getMovieById } from './moviesApi';
import { setMovies, setStatus, setError } from './moviesSlice';

export const fetchMovies = createAsyncThunk(
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

export const fetchMovieById = createAsyncThunk(
    'movies/fetchMovieById',
    async (id: string, { dispatch }) => {
        try {
            dispatch(setStatus('loading'));
            const movie = await getMovieById(id);
            dispatch(setMovies([movie]));
            dispatch(setStatus('succeeded'));
        } catch (error) {
            dispatch(setError('Failed to fetch movie'));
            dispatch(setStatus('failed'));
        }
    }
);