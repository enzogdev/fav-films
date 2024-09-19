import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../types/types';

// Define initial state by checking localStorage
const loadFavoritesFromLocalStorage = (): Film[] => {
    const storedFavorites = localStorage.getItem('favoriteFilms');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
};

interface FavoritesState {
    favoriteFilms: Film[];
}

const initialState: FavoritesState = {
    favoriteFilms: loadFavoritesFromLocalStorage(),
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Film>) => {
            const isFavorite = state.favoriteFilms.some(film => film.imdbID === action.payload.imdbID);
            if (!isFavorite) {
                state.favoriteFilms.push(action.payload);
                localStorage.setItem('favoriteFilms', JSON.stringify(state.favoriteFilms));
            }
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favoriteFilms = state.favoriteFilms.filter(film => film.imdbID !== action.payload);
            localStorage.setItem('favoriteFilms', JSON.stringify(state.favoriteFilms));
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
