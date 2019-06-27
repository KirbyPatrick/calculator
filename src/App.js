import React, { Component } from "react";
import "./App.css";
import CalculatorButtons from "./components/CalculatorButtons";
import ResultComponent from "./components/ResultComponent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    };
  }

  render() {
    return (
      <div className="wrapper center">
        <ResultComponent result={this.state.result} />
        <CalculatorButtons onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
