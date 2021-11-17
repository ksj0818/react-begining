import { Component } from "react";
import "./App.css";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {}
    }
  }
  render() {
    return (
      <div>
        <Subject title="Web" sub="world wide web"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content
          title="HTML"
          sub="HTML is HyperText Markup Language."
        ></Content>
      </div>
    );
  }
}

export default App;
