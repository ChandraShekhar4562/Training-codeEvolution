import React from "react";
import { UserConsumer } from "../userContext";

export default function ComponentChildForContext() {
  return (
    <div>
      <UserConsumer>
        {(userName) => {
          return <h1>{userName}</h1>;
        }}
      </UserConsumer>
    </div>
  );
}
