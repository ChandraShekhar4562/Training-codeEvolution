import React, { useState } from "react";

function HookFirst() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const changeFirstName = (e) => {
    setName({ ...name, firstName: e.target.value });
  };
  const changeLasttName = (e) => {
    setName({ ...name, lastName: e.target.value });
  };

  return (
    <div>
      HookFirst
      <input type="text" value={name.firstName} onChange={changeFirstName} />
      <input type="text" value={name.lastName} onChange={changeLasttName} />
      <h1>
        firstName={name.firstName} and lastName={name.lastName}
      </h1>
    </div>
  );
}

export default HookFirst;
