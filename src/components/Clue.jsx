import React, { useContext } from "react";
import { gameContext } from "./App";

const Clue = (props) => {
  const {
    setCurrentQuestion,
    setCurrentAnswer,
    setCurrentQuestionValue,
    setInputHiddenState,
    setAnsweredQuestions,
    answeredQuestions,
  } = useContext(gameContext);

  function clueSelected() {
    console.log(
      "clicked " +
        props.clue_id +
        " from category " +
        "'" +
        props.parent_category +
        "'"
    );
    console.log("Question Expected: ", props.clue.question);
    console.log("Answer Expected: ", props.clue.answer);
    console.log("Current Question Value: $", props.clue.value);
    setCurrentQuestion({ question: props.clue.question });
    setCurrentAnswer({ answer: props.clue.answer });
    setCurrentQuestionValue(props.clue.value);
    setInputHiddenState(false);
    setAnsweredQuestions([...answeredQuestions, props.clue.question]);
    console.log("answered questions: ", answeredQuestions);
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
        {"$" + props.clue.value}
      </div>
    );
  }
};

export default Clue;

// show $ value of clue OR
// the Clue question itself OR
// empty screen if it was already answered
