import { useState } from "react";

export const AddCategory = ({ OnNewCategory }) => {
  const [inputValue, setinputValue] = useState("");

  const OnInputChange = ({ target }) => {
    setinputValue(target.value);
  };
  const OnSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setinputValue("");
    OnNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={OnSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={OnInputChange}
      />
    </form>
  );
};
