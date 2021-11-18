import React, { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.sub}</h3>
      </div>
    );
  }
}

export default Subject;
