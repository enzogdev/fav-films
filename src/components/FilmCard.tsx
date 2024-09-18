import { Card } from "primereact/card";
import { Button } from "primereact/button";

interface FilmCardProps {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  onFavoriteToggle: (id: string) => void;
  isFavorite: boolean;
}

export const FilmCard: React.FC<FilmCardProps> = (props: FilmCardProps) => {
  const { title, poster, year, isFavorite } = props;

  const header = (
    <img
      alt={title}
      src={poster !== "N/A" ? poster : "https://via.placeholder.com/150"}
      style={{ width: "100%" }}
    />
  );

  return (
    <Card
      title={title}
      subTitle={year}
      header={header}
      className="p-card p-card-hover"
      style={{ width: "300px", marginBottom: "2em" }}
    >
      <Button
        icon={isFavorite ? "pi pi-star-fill" : "pi pi-star"}
        className={isFavorite ? "p-button-warning" : "p-button-outlined"}
        label={isFavorite ? "Favourite" : "Add to favourites"}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      />
    </Card>
  );
};
