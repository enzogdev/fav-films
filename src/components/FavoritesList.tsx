import { useDispatch, useSelector } from "react-redux";
import { Film } from "../types/types";
import { addFavorite, removeFavorite } from "../slices/favoriteSlice";
import { RootState } from "../store/store";
import { FilmCardMini } from "./FilmCardMini";
import { useFetchFilms } from "../hooks/useFetchFilms";
import { Sidebar } from "primereact/sidebar";
import { Badge } from "primereact/badge";
import { useState } from "react";

export const FavoritesList = () => {
  const { films } = useFetchFilms();
  const [visible, setVisible] = useState(false);
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

  const customHeader = (
    <div className="flex align-items-center gap-2">
      <h2>
        Favorite films <Badge value={favoriteFilms.length} />
      </h2>
    </div>
  );
  return (
    <>
      <button id="see-favs" onClick={() => setVisible(true)}>
        <i className="pi pi-star-fill" />
        <span>Favorites</span>
      </button>
      <Sidebar
        header={customHeader}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ minWidth: "50vw" }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {favoriteFilms.map((film) => (
            <FilmCardMini
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
      </Sidebar>
    </>
  );
};
