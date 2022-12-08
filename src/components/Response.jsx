import React, { useContext } from "react";
import { gameContext } from "./App";

const Response = (props) => {
  const {
    currentQuestion,
    userResponse,
    setUserResponse,
    setScore,
    score,
    setCurrentQuestion,
    inputHiddenState,
    setInputHiddenState,
  } = useContext(gameContext);

  const recordResponse = (event) => {
    setUserResponse(event.target.value);
  };

  const submitResponse = (event) => {
    if (event.key === "Enter") {
      currentQuestion.answer.toLowerCase() === userResponse.toLowerCase()
        ? setScore(score + currentQuestion.value)
        : setScore(score - currentQuestion.value);
      setCurrentQuestion({});
      setInputHiddenState(true);
      event.target.value = "";
    }
  };

  return (
    <div id="response" data-testid="response">
      <input
        type="text"
        placeholder="Answers go here!"
        onChange={recordResponse}
        onKeyPress={submitResponse}
        hidden={inputHiddenState}
      />
    </div>
  );
};

export default Response;
