import React, { Component } from 'react';

class result extends Component {
  render() {
    let {result} = this.props;
    return (
      <div>
        <p>{results}</p>
      </div>
    );
  }
}

export default result;