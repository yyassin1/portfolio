import "./App.css";
import GreetingMessage from "./GreetingMessage";

import Intro from "./Intro";
import React, { useState, useEffect } from "react";

function App() {
  const [greetingShown, setGreetingShown] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setGreetingShown(false);
    }, 2000); // Adjust the delay as needed

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="app--main">
      {greetingShown ? (
        <GreetingMessage />
      ) : (
        <>
          <Intro />
        </>
      )}
    </div>
  );
}

export default App;
