import React, { Component } from "react";
import UpdatedComponent from "./HocComponent";

class Hovercounter extends Component {
  render() {
    const { count, onIncreament } = this.props;
    return (
      <div>
        <h2 onMouseOver={onIncreament}>Hover {count} Times</h2>
      </div>
    );
  }
}

export default UpdatedComponent(Hovercounter, 5);
