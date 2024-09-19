import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../slices/searchSlice';
import favoriteReducer from '../slices/favoriteSlice'

export const store = configureStore({
    reducer: {
        search: searchReducer,
        favorites: favoriteReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;