import { Button } from "primereact/button";

interface FilmCardProps {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  onFavoriteToggle: (id: string) => void;
  isFavorite: boolean;
}

export const FilmCardMini: React.FC<FilmCardProps> = (props: FilmCardProps) => {
  const { imdbID, title, poster, year, isFavorite, onFavoriteToggle } = props;
  return (
    <article className="mini-card">
      <img src={poster} alt={title} />
      <div>
        <h2>{title}</h2>
        <h3>{year}</h3>
        <Button
          icon={isFavorite ? "pi pi-star-fill" : "pi pi-star"}
          className={isFavorite ? "p-button-warning" : "p-button-outlined"}
          label={isFavorite ? "Favorite" : "Add to favorites"}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          onClick={() => onFavoriteToggle(imdbID)}
        />
      </div>
    </article>
  );
};
