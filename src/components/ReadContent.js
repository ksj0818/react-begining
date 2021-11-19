import React, { Component } from "react";

class ReadContent extends Component {
  render() {
    return (
      <article>
        <h1>{this.props.title}</h1>
        <h2>{this.props.desc}</h2>
      </article>
    );
  }
}

export default ReadContent;
