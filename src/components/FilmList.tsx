import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../slices/favoriteSlice";
import { RootState } from "../store/store";
import { FilmCard } from "./FilmCard";
import { useFetchFilms } from "../hooks/useFetchFilms";
import { Button } from "primereact/button";
import { NotFound } from "./NotFound";

export const FilmList = () => {
  const { films, error, loading, loadMore, hasMore } = useFetchFilms();
  const dispatch = useDispatch();
  const favoriteFilms = useSelector(
    (state: RootState) => state.favorites.favoriteFilms
  );
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  const handleFavoriteToggle = (imdbID: string) => {
    const isFavorite = favoriteFilms.some(
      (film: { imdbID: string }) => film.imdbID === imdbID
    );
    const film = films.find((film) => film.imdbID === imdbID);

    if (film) {
      if (isFavorite) {
        dispatch(removeFavorite(imdbID));
      } else {
        dispatch(addFavorite(film));
      }
    }
  };

  // Verifica si una película está en favoritos
  const isFilmFavorite = (imdbID: string) => {
    return favoriteFilms.some((film) => film.imdbID === imdbID);
  };

  if (error) {
    return <NotFound searchTerm={searchTerm} />;
  }

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {films.map((film) => (
          <FilmCard
            key={film.imdbID}
            imdbID={film.imdbID}
            title={film.Title}
            year={film.Year}
            poster={film.Poster}
            onFavoriteToggle={handleFavoriteToggle}
            isFavorite={isFilmFavorite(film.imdbID)}
          />
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        {loading && <p>Loading...</p>}
        {hasMore && !loading && <Button label="See more" onClick={loadMore} />}
      </div>
    </>
  );
};
