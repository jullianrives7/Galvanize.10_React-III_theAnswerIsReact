import React, { useContext } from "react";
import Categories from "./Categories";
import { gameContext } from "./App";

//PropTypes package is installed with "npm i prop-types"
//PropTypes are used for assisting in troubleshooting errors in prop handling
//this is done by assigning a type to each prop, Ex. "currentQuestion: PropTypes.object"
//to require the type, just add ".isRequired" to the end of your propType
//Ex: "currentQuestion: PropTypes.object.isRequired"

const Gameboard = () => {
  const {
    currentQuestion,
    currentAnswer,
    currentQuestionValue,
    answeredQuestions,
  } = useContext(gameContext);
  console.log(
    currentQuestion.question === undefined
      ? "true: current question is undefined, rendering game board"
      : "false: current question defined, rendering current question " +
          console.log(
            "current question: ",
            currentQuestion,
            "current answer: ",
            currentAnswer,
            "current question value: ",
            currentQuestionValue,
            "answered questions: ",
            answeredQuestions
          )
  );

  if (currentQuestion.question === undefined) {
    return (
      <div
        data-testid="gameboard"
        id={currentQuestion.question ? "question" : "gameboard"}
      >
        <Categories />
        {/* was a question clicked?  */}
        {/* Yes? Show clue */}
        {/* No? Show Categories */}
      </div>
    );
  } else {
    return <div id="question">{currentQuestion.question}</div>;
  }
};

export default Gameboard;
