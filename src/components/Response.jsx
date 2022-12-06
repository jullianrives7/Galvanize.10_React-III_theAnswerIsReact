import React, { useState, useContext } from "react";
import { gameContext } from "./App";

const Response = (props) => {
  const {
    setUserAnswer,
    userAnswer,
    currentAnswer,
    currentQuestionValue,
    setScore,
    score,
    setCurrentQuestion,
    inputHiddenState,
    setInputHiddenState,
  } = useContext(gameContext);

  const recordResponse = (event) => {
    // Implement record response
    setUserAnswer({ answer: event.target.value });
  };

  const submitResponse = (event) => {
    if (event.key === "Enter") {
      console.log("enter pressed, user answer: ", userAnswer.answer);
      console.log("expected answer: ", currentAnswer.answer);
      if (
        currentAnswer.answer.toLowerCase() === userAnswer.answer.toLowerCase()
      ) {
        setScore(score + currentQuestionValue);
        console.log("Correct! Current question value: ", currentQuestionValue);
        console.log("Returning user back to game board");
      } else {
        setScore(score - currentQuestionValue);
        console.log("Wrong answer! Returning user back to gameboard");
      }
      setCurrentQuestion({});
      setInputHiddenState(true);
    }
    // this function should fire when the user fills the response and hits 'enter'
    // Is the user response correct?
    // yes/no? What should happen?
  };

  return (
    <div id="response" data-testid="response">
      <input
        type="text"
        placeholder="Answers go here!"
        onChange={recordResponse}
        onKeyPress={submitResponse}
        hidden={inputHiddenState}
        // handle data change
        // handle when 'enter' is hit
      />
    </div>
  );
};

export default Response;
