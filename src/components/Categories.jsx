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
          <Category
            key={i}
            category_id={"category_" + i}
            category_title={category.title}
            category_clues={category.clues}
          />
        );
      })}
      {/* display all the categories */}
    </div>
  );
};

export default Categories;
