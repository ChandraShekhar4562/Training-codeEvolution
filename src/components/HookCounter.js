import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      HookCounter
      <button onClick={onIncrement}>button clicked {count} times</button>
    </div>
  );
}

export default HookCounter;
