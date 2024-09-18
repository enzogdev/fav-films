import { SearchResponse } from '../types/types';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchFilmBySearch = async (query: string, page: number = 1): Promise<SearchResponse> => {
    const response = await fetch(`${BASE_URL}?s=${encodeURIComponent(query)}&page=${page}&apikey=${API_KEY}`);

    if (!response.ok) {
        throw new Error(`Error al buscar películas: ${response.statusText}`);
    }

    const data: SearchResponse = await response.json();
    if (data.Response === 'False') {
        throw new Error(data.Error || 'No se encontraron resultados');
    }

    return data;
};