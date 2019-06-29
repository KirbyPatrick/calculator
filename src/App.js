import React, { Component } from "react";
import "./App.css";
import ResultComponent from "./components/ResultComponent";
import CalculatorButtons from "./components/CalculatorButtons";
import ResetButton from "./components/ResetButton";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    };
  }

  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else if (button === "reset") {
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
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + ""
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
      <div>
        <div className="wrapper center">
          <h1>Simple Calculator</h1>
          <ResultComponent result={this.state.result} />
          <CalculatorButtons onClick={this.onClick} />
          <ResetButton onClick={this.reset} />
        </div>
      </div>
    );
  }
}

export default App;
