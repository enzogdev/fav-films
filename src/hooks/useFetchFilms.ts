import { useState, useEffect } from 'react';
import { fetchFilmBySearch } from '../services/FilmAPI';
import { Film } from '../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface UseFetchFilmsReturn {
    films: Film[];
    error: string | null;
}

export const useFetchFilms = (): UseFetchFilmsReturn => {
    const [films, setFilms] = useState<Film[]>([]);
    const [error, setError] = useState<string | null>(null);
    const searchTerm = useSelector((state: RootState) => state.search.searchTerm);


    useEffect(() => {
        if (searchTerm) {
            const fetchData = async () => {
                setError(null);

                try {
                    const data = await fetchFilmBySearch(searchTerm);
                    console.log(data)
                    setFilms(data.Search || []);
                } catch (err) {
                    setError((err as Error).message);
                }
            };

            fetchData();
        }
    }, [searchTerm]);

    return { films, error };
};