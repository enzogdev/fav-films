import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../slices/favoriteSlice";
import { RootState } from "../store/store";
import { FilmCard } from "./FilmCard";
import { useFetchFilms } from "../hooks/useFetchFilms";

export const FilmList = () => {
  const { films, error } = useFetchFilms();
  const dispatch = useDispatch();
  const favoriteFilms = useSelector(
    (state: RootState) => state.favorites.favoriteFilms
  );

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
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {films.map((film) => (
        <FilmCard
          key={film.imdbID}
          imdbID={film.imdbID}
          title={film.Title}
          year={film.Year}
          poster={film.Poster}
          onFavoriteToggle={handleFavoriteToggle} // Pasar la función para togglear favoritos
          isFavorite={isFilmFavorite(film.imdbID)} // Pasar si es favorito o no
        />
      ))}
    </div>
  );
};
