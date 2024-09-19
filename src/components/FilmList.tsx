import { useEffect, useState } from "react";
import { FilmCard } from "../components/FilmCard"; // Ajusta la ruta según la estructura de tu proyecto
import { useFetchFilms } from "../hooks/useFetchFilms";
import { Film } from "../types/types";

const handleFavoriteToggle = (imdbID: string) => {
  console.log(`Toggling favorite for: ${imdbID}`);
};

export const FilmList = () => {
  const { films, error } = useFetchFilms();

  useEffect(() => {
    console.log(films);
  }, [films]);

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
          onFavoriteToggle={handleFavoriteToggle}
          isFavorite={false}
        />
      ))}
    </div>
  );
};
