import React, { useContext } from "react";
import { gameContext } from "./App";

const Clue = (props) => {
  const {
    setCurrentQuestion,
    setAnsweredQuestions,
    answeredQuestions,
    setInputHiddenState,
  } = useContext(gameContext);

  function clueSelected() {
    setCurrentQuestion(props.clue);
    setAnsweredQuestions([...answeredQuestions, props.clue.question]);
    setInputHiddenState(false);
  }

  if (answeredQuestions.includes(props.clue.question)) {
    return <div className="clueValue"></div>;
  } else {
    return (
      <div
        className="clueValue"
        data-testid={props.clue_id + " " + props.parent_category}
        onClick={clueSelected}
      >
        ${props.clue.value}
      </div>
    );
  }
};

export default Clue;

// show $ value of clue OR
// the Clue question itself OR
// empty screen if it was already answered
