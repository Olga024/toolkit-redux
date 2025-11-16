import { createAsyncThunk } from '@reduxjs/toolkit';
import { addFavorite, removeFavorite, type Favorite } from './favoritesSlice';

export const addToFavorites = createAsyncThunk(
  'favorites/addToFavorites',
  (movie: Favorite, { dispatch }) => {
    dispatch(addFavorite(movie));
  }
);

export const removeFromFavorites = createAsyncThunk(
  'favorites/removeFromFavorites',
  (id: string, { dispatch }) => {
    dispatch(removeFavorite(id));
  }
);