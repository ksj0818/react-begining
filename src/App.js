import React, { Component } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Control from "./components/Control";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
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
  getReadContent() {
    let i = 0;
    while (i < this.state.contents.length) {
      let data = this.state.contents[i];
      // 데이터의 아이디 값과 셀렉트id가 일치하다면 본문 내용 출력
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i += 1;
    }
  }
  getContent() {
    let _title,
      _desc,
      _article = null;
    if (this.state.mode === "welcome") {
      // mode가 welcome일 때
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      let _content = this.getReadContent();
      _article = (
        <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      );
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id += 1;
            // arr.push() 원본을 수정
            // arr.concat() 원본을 수정 하지 않고  새로운 데이터를 추가
            // Array.from() 이용하기
            let newContent = Array.from(this.state.contents);
            // newCoutent 변수에 contents값을 복사 후 입력받은 데이터를 push하기
            newContent.push({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              // 복사본 + 입력받은 데이터를 합친 newContent 변수를 contents에 넣어주기
              contents: newContent,
            });
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === "update") {
      let _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (_title, _desc) {}.bind(this)}
        ></UpdateContent>
      );
    }
    return _article;
  }

  render() {
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

        {/* mode에 따라 가변적으로 변하도록 하기 위해서 변수로 처리 */}
        {this.getContent()}
      </div>
    );
  }
}

export default App;
