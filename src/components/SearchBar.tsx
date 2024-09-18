import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      aria-label="Buscar películas y series"
    >
      <div className="p-inputgroup">
        <InputText
          id="search-input"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Lord of the Rings"
          aria-label="Search films"
          className="p-inputtext-lg"
        />
        <Button
          type="submit"
          icon="pi pi-search"
          className="p-button-lg"
          aria-label="Start search"
        />
      </div>
    </form>
  );
};
