import { Component } from "react";
import "./App.css";
import TOC from "./components/TOC";
import Content from "./components/Content";
// import Subject from "./components/Subject";

class App extends Component {
  constructor(props) {
    super(props);
    // state값 초기화
    this.state = {
      mode: "read",
      welcome: { title: "Welcome", desc: "Hello, React!!!" },
      subject: { title: "WEB!", sub: "World Wide Web" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText..." },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JS", desc: " JS is for interactive" },
      ],
    };
  }
  render() {
    let _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <div>
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject> */}
        <header>
          <h1>
            <a
              href="/"
              onClick={function (e) {
                e.preventDefault();
                // 이벤트가 호출되었을때 실행되는 함수 안에서는 this의 값이 컴포넌트 자기 자신을 가리키지 않고 아무 값도 세팅 되어있지 않음. 그렇기 때문에 undefined의 state를 읽으려고 했더니 error발생.
                // 이벤트를 설치할 때 this를 찾을 수 없어서 error가 발생하면 그냥 .bind(this)함수를 이벤트함수가 끝난 직후에 넣어주면된다.
                // this.state.mode = "welcome"; 이렇게 짜면 리액트는 state가 바뀐걸 모름
                this.setState({
                  mode: "welcome",
                });
              }.bind(this)}
            >
              {this.state.subject.title}
            </a>
          </h1>
          <h4>{this.state.subject.sub}</h4>
        </header>

        {/*데이터가 바뀌었다고 TOC의 로직을 바꿀 필요가 없다. */}
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} sub={_desc}></Content>
      </div>
    );
  }
}

export default App;
