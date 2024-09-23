import { SearchBar } from "./components/SearchBar";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { FilmList } from "./components/FilmList";
import { FavoritesList } from "./components/FavoritesList";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <header>
        <SearchBar />
      </header>
      <FilmList />
      <div className="card flex justify-content-center">
        <FavoritesList />
      </div>
    </div>
  );
}

export default App;
