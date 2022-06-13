import React, { useEffect, useRef, useState } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const IntervalRef = useRef();
  useEffect(() => {
    IntervalRef.current = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(IntervalRef.current);
    };
  }, []);

  return (
    <div>
      <h1>{timer}</h1>
      <button onClick={() => clearInterval(IntervalRef.current)}>
        Clear Interval
      </button>
    </div>
  );
}

export default HookTimer;
