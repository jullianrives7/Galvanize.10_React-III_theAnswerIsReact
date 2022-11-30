import React, { useState } from "react";

const Response = (props) => {
  const [userResponse, setUserResponse] = useState("");

  const recordResponse = (event) => {
    // Implement record response
  };

  const submitResponse = (event) => {
    // this function should fire when the user fills the response and hits 'enter'
    // Is the user response correct?
    // yes/no? What should happen?
  };

  return (
    <div id="response" data-testid="response">
      <input
        type="text"
        placeholder="Answers go here!"
        // handle data change
        // handle when 'enter' is hit
      />
    </div>
  );
};

export default Response;
