import React, { Component } from "react";

class ReadContent extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.desc}</h2>
      </div>
    );
  }
}

export default ReadContent;
