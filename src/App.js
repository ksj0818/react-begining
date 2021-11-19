import React, { Component } from "react";
import "./App.css";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Control from "./components/Control";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      selected_content_id: 1,
      welcome: { title: "Welcome!", desc: "Hello React!!!!" },
      subject: { title: "INFRACUBE", sub: "Development, dept" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText" },
        { id: 2, title: "CSS", desc: "CSS is design" },
        { id: 3, title: "JS", desc: "JS is interactive" },
      ],
    };
    this.max_contents_id = this.state.contents.length + 1;
  }
  render() {
    let _title,
      _desc,
      _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = (
        <ReadContent
          title={this.state.welcome.title}
          desc={this.state.welcome.desc}
        ></ReadContent>
      );
    } else if (this.state.mode === "read") {
      let i = 0;
      while (i < this.state.contents.length) {
        let data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
          break;
        }
        i += 1;
      }
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            let _contents = this.state.contents.concat({
              id: this.max_contents_id,
              title: _title,
              desc: _desc,
            });

            this.setState({
              contents: _contents,
            });
          }.bind(this)}
        ></CreateContent>
      );
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: "welcome",
            });
          }.bind(this)}
        ></Subject>

        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>

        <Control
          onChangeMode={function (_mode) {
            this.setState({
              mode: _mode,
            });
          }.bind(this)}
        ></Control>

        {/* mode값에 따라 가변적으로 변할 수 있도록 하기 위해서 변수 사용 */}
        {_article}
      </div>
    );
  }
}

export default App;
