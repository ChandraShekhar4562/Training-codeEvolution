import React from "react";

const UpdatedComponent = (OriginalComponent, inctimes = 1) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    onIncreament = () => {
      this.setState((prevState) => {
        return { count: prevState.count + inctimes };
      });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          onIncreament={this.onIncreament}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};
export default UpdatedComponent;
