import { createSlice } from '@reduxjs/toolkit';

export interface Favorite {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}

export interface FavoritesState {
  favorites: Favorite[];
}

const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.favorites.push(action.payload);
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.imdbID !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const selectFavorites = (state: { favorites: FavoritesState }) =>
  state.favorites.favorites;

export default favoritesSlice.reducer;