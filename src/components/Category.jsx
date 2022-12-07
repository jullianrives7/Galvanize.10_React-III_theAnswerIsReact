import React, { useContext } from "react";
import Clue from "./Clue";
import { gameContext } from "./App";

const Category = (props) => {
  const { answeredQuestions } = useContext(gameContext);

  return (
    <div className="category" data-testid={props.category_id}>
      <div className="categoryTitle">{props.category.title.toUpperCase()}</div>
      {props.category.clues.map((clue, i) => {
        return (
          <Clue
            key={i}
            clue={clue}
            clue_id={"clue_" + i}
            parent_category={"from_" + props.category.title}
          />
        );
      })}
    </div>
  );
};

export default Category;
