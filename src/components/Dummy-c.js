import React, { useContext } from "react";
import { UserContextChannel, UserContextName } from "../App";

function DummyC() {
  const userName = useContext(UserContextName);
  const userChannelName = useContext(UserContextChannel);

  return (
    <div>
      <h2>
        UseContext-Values:-{userName} in {userChannelName}
      </h2>
    </div>
  );
}

export default DummyC;
