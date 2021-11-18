import React, { Component } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Contents from "./components/Contents";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Subject title="Web" sub="www"></Subject>
        <TOC></TOC>
        <Contents></Contents>
      </div>
    );
  }
}

export default App;
