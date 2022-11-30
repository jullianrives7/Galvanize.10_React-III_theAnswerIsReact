import React from "react";

const Gameboard = (props) => {
  return (
    <div
      data-testid="gameboard"
      id={props.currentQuestion.question ? "question" : "gameboard"}
    >
      {/* was a question clicked?  */}
      {/* Yes? Show clue */}
      {/* No? Show Categories */}
    </div>
  );
};

export default Gameboard;
