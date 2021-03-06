import React, { Component } from "react";

class CalculatorButtons extends Component {
  render() {
    return (
      <div>
        <div className="gridClass">
          {/* first row of numbers */}

          <button name="7" onClick={e => this.props.onClick(e.target.name)}>
            7
          </button>
          <button name="8" onClick={e => this.props.onClick(e.target.name)}>
            8
          </button>
          <button name="9" onClick={e => this.props.onClick(e.target.name)}>
            9
          </button>
          <button name="/" onClick={e => this.props.onClick(e.target.name)}>
            /
          </button>

          {/* second row of numbers */}

          <button name="4" onClick={e => this.props.onClick(e.target.name)}>
            4
          </button>
          <button name="5" onClick={e => this.props.onClick(e.target.name)}>
            5
          </button>
          <button name="6" onClick={e => this.props.onClick(e.target.name)}>
            6
          </button>
          <button name="*" onClick={e => this.props.onClick(e.target.name)}>
            *
          </button>

          {/* third row of numbers */}

          <button name="1" onClick={e => this.props.onClick(e.target.name)}>
            1
          </button>
          <button name="2" onClick={e => this.props.onClick(e.target.name)}>
            2
          </button>
          <button name="3" onClick={e => this.props.onClick(e.target.name)}>
            3
          </button>
          <button name="-" onClick={e => this.props.onClick(e.target.name)}>
            -
          </button>

          {/* forth row of numbers */}

          <button name="0" onClick={e => this.props.onClick(e.target.name)}>
            0
          </button>
          <button name="." onClick={e => this.props.onClick(e.target.name)}>
            .
          </button>
          <button name="=" onClick={e => this.props.onClick(e.target.name)}>
            =
          </button>
          <button name="+" onClick={e => this.props.onClick(e.target.name)}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CalculatorButtons;
