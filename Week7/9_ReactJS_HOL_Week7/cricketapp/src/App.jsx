import React, { useState } from "react";
import ListofPlayers from "./components/ListofPlayers";
import IndianPlayers from "./components/IndianPlayers";

function App() {
  const [flag, setFlag] = useState(true);

  const toggleView = () => {
    setFlag((prev) => !prev);
  };

  return (
    <div>
      <h1>🏏 Welcome to Cricket App</h1>

      <button onClick={toggleView}>
        {flag ? "Switch to Indian Players" : "Switch to List of Players"}
      </button>

      <hr />

      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
