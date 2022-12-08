import React, { useContext } from "react";
import Categories from "./Categories";
import { gameContext } from "./App";

const Gameboard = () => {
  const { currentQuestion, answeredQuestions } = useContext(gameContext);

  return (
    <div
      data-testid="gameboard"
      id={currentQuestion.question ? "question" : "gameboard"}
    >
      {currentQuestion.question ? (
        currentQuestion.question +
        console.log("Expected answer: ", currentQuestion.answer)
      ) : (
        <Categories />
      )}
    </div>
  );
};

export default Gameboard;

// {/* was a question clicked?  */}
// {/* Yes? Show clue */}
// {/* No? Show Categories */}

//PropTypes package is installed with "npm i prop-types"
//PropTypes are used for assisting in troubleshooting errors in prop handling
//this is done by assigning a type to each prop, Ex. "currentQuestion: PropTypes.object"
//to require the type, just add ".isRequired" to the end of your propType
//Ex: "currentQuestion: PropTypes.object.isRequired"

// console.log(
//   currentQuestion.question === undefined
//     ? "true: current question is undefined, rendering game board"
//     : "false: current question defined, rendering current question " +
//         console.log(
//           "current question: ",
//           currentQuestion.question,
//           "\n\ncurrent answer: ",
//           currentQuestion.answer,
//           "\n\ncurrent question value: ",
//           currentQuestion.value,
//           "\n\nanswered questions: ",
//           answeredQuestions
//         )
// );
