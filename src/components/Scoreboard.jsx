import React, { useContext } from "react";
import { gameContext } from "./App";

const Scoreboard = () => {
  const { score } = useContext(gameContext);

  return (
    <div id="scoreboard" data-testid="scoreboard">
      ${score}
    </div>
  );
};

export default Scoreboard;
