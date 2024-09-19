import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../slices/searchSlice";

export const SearchBar = () => {
  const [inputValue, setinputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setinputValue(query);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchTerm(inputValue));
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
          value={inputValue}
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
