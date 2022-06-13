import React, { useEffect, useRef } from "react";

function FocusInputByuseRef() {
  const inputRef = useRef(null);
  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  return (
    <div>
      FocusInputByuseRef
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default FocusInputByuseRef;
