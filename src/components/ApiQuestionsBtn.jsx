import React, { useContext } from "react";
import { gameContext } from "./App";

const ApiQuestionsButton = () => {
  const { setCategories, apiData } = useContext(gameContext);

  const genApiQuestions = () => {
    console.log("apiData: ", apiData);
    setCategories(apiData);
  };

  return (
    <div
      id="api-questions-btn"
      data-testid="api-questions-btn"
      onClick={genApiQuestions}
    >
      API Questions
    </div>
  );
};

export default ApiQuestionsButton;
