import React, { useContext } from "react";
import Category from "./Category";
import { gameContext } from "./App";

const Categories = () => {
  const { categories } = useContext(gameContext);
  console.log(categories);

  return (
    <div id="categories" data-testid="categoryList">
      {categories.map((category, i) => {
        return (
          <Category key={i} category={category} category_id={"category_" + i} />
        );
      })}
    </div>
  );
};

export default Categories;
