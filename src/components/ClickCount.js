import React, { Component } from "react";
import UpdatedComponent from "./HocComponent";

class ClickCount extends Component {
  render() {
    const { count, onIncreament } = this.props;
    return (
      <div>
        <button onClick={onIncreament}>
          {this.props.name} Clicked {count} Times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCount, 10);
