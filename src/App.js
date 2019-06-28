import React, { Component } from "react";
import "./App.css";
import CalculatorButtons from "./components/CalculatorButtons";
import ResultComponent from "./components/ResultComponent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "0"
    };
  }

  onClick = button => {
    if (button === "Enter") {
      this.calculate();
    } else if (button === "Reset") {
      this.reset();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.setState.result) || "0") + "0"
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  render() {
    return (
      <div className="wrapper center">
        <h1>Simple Calculator</h1>
        <ResultComponent result={this.state.result} />
        <CalculatorButtons onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
