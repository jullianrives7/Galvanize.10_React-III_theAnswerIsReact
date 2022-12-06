import React, { useContext } from "react";
import Clue from "./Clue";
import { gameContext } from "./App";

const Category = (props) => {
  const { answeredQuestions } = useContext(gameContext);
  console.log(answeredQuestions[0]);

  return (
    <div className="category" data-testid={props.category_id}>
      <div className="categoryTitle">
        {props.category_title.toUpperCase()}
        {/* display category title */}
      </div>
      {props.category_clues.map((clue, i) => {
        return (
          <Clue
            key={i}
            clue={clue}
            clue_id={"clue_" + i}
            parent_category={props.category_title}
          />
        );
      })}
      {/* display clues for each category */}
    </div>
  );
};

export default Category;
