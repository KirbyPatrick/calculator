import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

class CalculatorButtons extends Component {
  
  render() {
    return (
      <div>
        <div className="gridClass">
          <Button name="7" onClick={e => this.props.onClick(e.target.name)}>7</Button>
          <Button name="7" onClick={e => this.props.onClick(e.target.name)}>8</Button>
          <Button name="7" onClick={e => this.props.onClick(e.target.name)}>9</Button>
          <Button name="7" onClick={e => this.props.onClick(e.target.name)} aria-label="Add" className="fab">
            /
          </Button>

          <Button name="7" onClick={e => this.props.onClick(e.target.name)}>4</Button>
          <Button name="7" onClick={e => this.props.onClick(e.target.name)}>5</Button>
          <Button name="7" onClick={e => this.props.onClick(e.target.name)}>6</Button>
          <Button name="7" onClick={e => this.props.onClick(e.target.name)} aria-label="Add" className="fab">
            *
          </Button>

          <Button name="7" onClick={e => this.props.onClick(e.target.name)}>1</Button>
          <Button name="7" onClick={e => this.props.onClick(e.target.name)}>2</Button>
          <Button name="7" onClick={e => this.props.onClick(e.target.name)}>3</Button>
          <Button name="7" onClick={e => this.props.onClick(e.target.name)} aria-label="Add" className="fab">
            -
          </Button>

          <Button name="7" onClick={e => this.props.onClick(e.target.name)}>0</Button>
          <Button name="7" onClick={e => this.props.onClick(e.target.name)}>.</Button>
          <Button name="7" onClick={e => this.props.onClick(e.target.name)}>ENTER</Button>
          <Button name="7" onClick={e => this.props.onClick(e.target.name)} aria-label="Add">+</Button>
        </div>
      </div>
    );
  }
}

export default CalculatorButtons;
