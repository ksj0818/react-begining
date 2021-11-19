import React, { Component } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Contents from "./components/Contents";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "read",
      selected_content_id: 1,
      welcome: { title: "welcome", desc: "Hello, React!!!" },
      subject: { title: "WEB!", sub: "www" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText..." },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JS", desc: "JS is for interactive" },
      ],
    };
  }
  render() {
    let _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      // mode가 welcome일 때
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      // mode가 read일 때
      let i = 0;
      while (i < this.state.contents.length) {
        let data = this.state.contents[i];
        // 데이터의 아이디 값과 셀렉트id가 일치하다면 본문 내용 출력
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i += 1;
      }
    }
    return (
      <div>
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

        <Contents title={_title} desc={_desc}></Contents>
      </div>
    );
  }
}

export default App;
