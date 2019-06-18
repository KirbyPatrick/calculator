import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

class CalculatorButtons extends Component {
  state = {
    currentNumber: 0
  };

  render() {
    return (
      <div>
        <div>
          <p>{this.state.currentNumber}</p>
        </div>
        <div className="gridClass">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Fab aria-label="Add" className="fab">
            /
          </Fab>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Fab aria-label="Add" className="fab">
            *
          </Fab>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Fab aria-label="Add" className="fab">
            -
          </Fab>
          <Button>0</Button>
          <Button>.</Button>
          <Button>ENTER</Button>
          <Fab aria-label="Add">+</Fab>
        </div>
      </div>
    );
  }
}

export default CalculatorButtons;
