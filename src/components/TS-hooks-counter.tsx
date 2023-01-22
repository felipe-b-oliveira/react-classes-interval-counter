import React, {useState, useEffect, useRef} from "react";
import "./styles.css";

/**
 * Author: Felipe Oliveira
 * Description: Example of a React components using hooks and Typescript. In this
 * case we don't have explicit type due to Typescript type inference.
 */
export default function TSHooksCounter() {
    const [count, setCount] = useState(0);
    const [stop, setSTop] = useState(false);
    const [intervalId, setIntervalId] = useState(0);

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
        <div>
            <h1>{count}</h1>
            <button onClick={stopCount}>Stop Count</button>
            <br></br>
            <br></br>
            <button onClick={startCount}>Start Count</button>
        </div>
    );
}
