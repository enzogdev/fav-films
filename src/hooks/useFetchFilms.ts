import { useState, useEffect } from 'react';
import { fetchFilmBySearch } from '../services/FilmAPI';
import { Film } from '../types/types';

interface UseFetchFilmsReturn {
    films: Film[];
    error: string | null;
    searchFilms: (query: string) => void;
}

export const useFetchFilms = (): UseFetchFilmsReturn => {
    const [films, setFilms] = useState<Film[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState<string | null>(null);

    const searchFilms = (query: string) => {
        setQuery(query);
    };

    useEffect(() => {
        if (query) {
            const fetchData = async () => {
                setError(null);

                try {
                    const data = await fetchFilmBySearch(query);
                    setFilms(data.Search);
                } catch (err) {
                    setError((err as Error).message);
                }
            };

            fetchData();
        }
    }, [query]);

    return { films, error, searchFilms };
};
