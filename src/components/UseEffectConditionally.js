import React, { useEffect, useState } from "react";

function UseEffectConditionally() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const clickHandler = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    document.title = `You Clickde ${count} Times`;
    console.log("updating useEffect");
  }, [count]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={clickHandler}>Button clicked {count} Times</button>
    </div>
  );
}

export default UseEffectConditionally;
