import { SearchBar } from "./components/SearchBar";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { FilmList } from "./components/FilmList";
import { FavoritesList } from "./components/FavoritesList";

function App() {
  return (
    <div>
      <SearchBar />
      <FilmList />
      <div>
        <FavoritesList />
      </div>
    </div>
  );
}

export default App;
