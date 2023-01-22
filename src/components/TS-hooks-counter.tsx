import React, {useState, useEffect, useRef} from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [stop, setSTop] = useState(false);
  const [intervalId, setIntervalId] = useState();

  useEffect(() => {
    const id = returnIntervalId();
    return () => clearInterval(id);
  }, [stop]);

  const returnIntervalId = () => {
    if (!stop) {
      const id = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
      setIntervalId(id);
      return id;
    }
  };

  const stopCount = () => {
    clearInterval(intervalId);
    setSTop(true);
    setCount(0);
  };

  const startCount = () => {
    setSTop(false);
    returnIntervalId();
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={stopCount}>Stop Count</button>
      <br></br>
      <br></br>
      <button onClick={startCount}>Start Count</button>
    </div>
  );
}
