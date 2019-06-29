import React, { Component } from "react";

class ResetButton extends Component {
  render() {
    return (
      <div>
        {/* Reset button to clear state */}

        <div className="resetButtonGrid">
          <button name="reset" onClick={e => this.props.onClick(e.target.name)}>
            CLEAR
          </button>
        </div>
      </div>
    );
  }
}

export default ResetButton;
