import React from "react";
import "./App.css";
import CalculatorButtons from "./components/CalculatorButtons";
import Results from "./components/Results";

function App() {
  return (
    <div className="wrapper center">
      <Results />
      <CalculatorButtons />
    </div>
  );
}

export default App;
