import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userdetails: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ userdetails: response.data });
      })
      .catch((e) => console.log(e));
  }
  render() {
    const { userdetails } = this.state;
    return (
      <div>
        PostList
        {userdetails.map((eachDetails) => {
          return <h1>{eachDetails.title}</h1>;
        })}
      </div>
    );
  }
}

export default PostList;
