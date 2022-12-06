import React, { useState } from "react";
import Gameboard from "./Gameboard.jsx";
import Scoreboard from "./Scoreboard.jsx";
import Response from "./Response.jsx";
import data from "../testdata.js";

const App = () => {
  const [categories, setCategories] = useState(data.categories);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentQuestionValue, setCurrentQuestionValue] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState({});
  const [userAnswer, setUserAnswer] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [inputHiddenState, setInputHiddenState] = useState(true);
  const contextData = {
    categories,
    setCategories,
    currentQuestion,
    setCurrentQuestion,
    currentQuestionValue,
    setCurrentQuestionValue,
    currentAnswer,
    setCurrentAnswer,
    userAnswer,
    setUserAnswer,
    answeredQuestions,
    setAnsweredQuestions,
    score,
    setScore,
    inputHiddenState,
    setInputHiddenState,
  };

  return (
    <gameContext.Provider value={{ ...contextData }}>
      <div id={"app"}>
        <Gameboard />
        <Scoreboard />
        <Response />
      </div>
    </gameContext.Provider>
  );
};

export const gameContext = React.createContext();
export default App;

//Hooks can only be used in function components (useState is a hook)
//Hooks must execute in the same order they are declared
//Hooks cannot be nested, used in conditionals, or loops unless stored in a variable

//Prop drilling should be avoided
//Context API is built into React
//useContext is a context api method used to pass props without prop drilling
