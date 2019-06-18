import React, { Component } from "react";

class Results extends Component {
  state = {
    currentNumber: 8
  };

  render() {
    return (
      <div>
        <p>{this.state.currentNumber}</p>
      </div>
    );
  }
}

export default Results;
