import React, { useEffect, useState } from "react";

function UseEffectCleanup() {
  const [display, setdisplay] = useState(true);
  useEffect(() => {
    console.log("useEffect called");
    return () => {
      console.log("unmounting-useEffect");
    };
  });

  return (
    <div>
      <button onClick={() => setdisplay(!display)}>Toggle</button>
      {display && <h1>Chandu</h1>}
    </div>
  );
}

export default UseEffectCleanup;
