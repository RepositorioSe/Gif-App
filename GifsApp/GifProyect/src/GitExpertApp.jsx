import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const OnAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GitExpertApp</h1>

      <AddCategory OnNewCategory={(value) => OnAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
