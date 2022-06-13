import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetchingFromUseEffect() {
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      DataFetchingFromUseEffect
      <ul>
        {Posts.map((eachPost) => {
          return <li>{eachPost.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default DataFetchingFromUseEffect;
