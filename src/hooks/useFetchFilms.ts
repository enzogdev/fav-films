import { useState, useEffect } from 'react';
import { fetchFilmBySearch } from '../services/FilmAPI';
import { Film } from '../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface UseFetchFilmsReturn {
    films: Film[];
    error: string | null;
    loading: boolean;
    loadMore: () => void;
    hasMore: boolean;
}

export const useFetchFilms = (): UseFetchFilmsReturn => {
    const [films, setFilms] = useState<Film[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(false);
    const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

    const fetchData = async (pageNum: number) => {
        setLoading(true);
        setError(null);

        try {
            const data = await fetchFilmBySearch(searchTerm, pageNum);

            if (data.Search && data.Search.length > 0) {
                if (pageNum === 1) {
                    setFilms(data.Search);
                } else {
                    setFilms((prevFilms) => [...prevFilms, ...data.Search]);
                }

                // Convert 'totalResults' to number before comparison
                setHasMore(data.Search.length > 0 && Number(data.totalResults) > films.length + data.Search.length);
            } else {
                setHasMore(false);
            }
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (searchTerm) {
            setPage(1); // Reset to first page on new search
            fetchData(1);
        }
    }, [searchTerm]);

    const loadMore = () => {
        if (!loading && hasMore) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        if (page > 1) {
            fetchData(page);
        }
    }, [page]);

    return { films, error, loading, loadMore, hasMore };
};
