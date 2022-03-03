import React, { useState } from "react";
import {useEffect} from "react"

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("cosas asincronas");

    const intervalId = setInterval(() => setCount((prev) => prev + 1), 1000);
    return ()=>clearInterval(intervalId) // cleanup runs AFTER useEffect has finished
  }, []);

  useEffect(() => {
    // <== ADD
    console.log("useEffect - on update");
    document.title = "Timer app. Count is: " + count;
  }, [count]);



  return (
    <div className="Timer">
      <h2>Timer</h2>

      <h3>{count}</h3>
    </div>
  );
}

export default Timer;
