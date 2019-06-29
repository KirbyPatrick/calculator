import React, { Component } from "react";

class ResultComponent extends Component {
  render() {
    let { result } = this.props;
    return (
      <div className="resultsBox">
        <p>{result}</p>
      </div>
    );
  }
}

export default ResultComponent;
