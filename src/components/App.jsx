import React, { useState, useEffect } from "react";
import Gameboard from "./Gameboard.jsx";
import Scoreboard from "./Scoreboard.jsx";
import Response from "./Response.jsx";
import ApiQuestionsButton from "./ApiQuestionsBtn.jsx";
import data from "../testdata.js";
import { returnApiData } from "../jservice_API_Data.js";

const App = () => {
  const [categories, setCategories] = useState(data.categories);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [userResponse, setUserResponse] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [inputHiddenState, setInputHiddenState] = useState(true);
  const [apiData, setApiData] = useState();

  const contextData = {
    categories,
    setCategories,
    currentQuestion,
    setCurrentQuestion,
    userResponse,
    setUserResponse,
    answeredQuestions,
    setAnsweredQuestions,
    score,
    setScore,
    inputHiddenState,
    setInputHiddenState,
    apiData,
    setApiData,
  };

  useEffect(() => {
    console.log("testdata: ", categories);
    returnApiData().then((data) => {
      setApiData(data);
    });
  }, []);

  return (
    <gameContext.Provider value={{ ...contextData }}>
      <div id={"app"}>
        <Gameboard />
        <Scoreboard />
        <Response />
        <ApiQuestionsButton />
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
