import { useDispatch, useSelector } from "react-redux";
import { Film } from "../types/types";
import { addFavorite, removeFavorite } from "../slices/favoriteSlice";
import { RootState } from "../store/store";
import { FilmCard } from "./FilmCard";
import { useFetchFilms } from "../hooks/useFetchFilms";

export const FavoritesList = () => {
  const { films, error } = useFetchFilms();
  const favoriteFilms: Film[] = useSelector(
    (state: RootState) => state.favorites.favoriteFilms
  );
  const dispatch = useDispatch();

  const handleFavoriteToggle = (imdbID: string) => {
    const isFavorite = favoriteFilms.some(
      (film: { imdbID: string }) => film.imdbID === imdbID
    );
    const film = films.find((film) => film.imdbID === imdbID);

    if (film) {
      dispatch(isFavorite ? removeFavorite(imdbID) : addFavorite(film));
    }
  };

  const isFilmFavorite = (imdbID: string) => {
    return favoriteFilms.some((film) => film.imdbID === imdbID);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {favoriteFilms.map((film) => (
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
  );
};
