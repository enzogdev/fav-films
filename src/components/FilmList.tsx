import { FilmCard } from "../components/FilmCard"; // Ajusta la ruta según la estructura de tu proyecto

const films = [
  {
    imdbID: "tt1234567",
    title: "The Dark Knight",
    year: "2008",
    poster: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
    type: "movie",
  },
  {
    imdbID: "tt7654321",
    title: "Breaking Bad",
    year: "2008–2013",
    poster: "https://image.tmdb.org/t/p/w500/eSzpy96DwBujGFj0xMbXBcGcfxX.jpg",
    type: "series",
  },
];

const handleFavoriteToggle = (imdbID: string) => {
  console.log(`Toggling favorite for: ${imdbID}`);
};

export const FilmList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {films.map((film) => (
        <FilmCard
          key={film.imdbID}
          imdbID={film.imdbID}
          title={film.title}
          year={film.year}
          poster={film.poster}
          onFavoriteToggle={handleFavoriteToggle}
          isFavorite={false} // Aquí puedes cambiar dinámicamente si es favorito o no
        />
      ))}
    </div>
  );
};
