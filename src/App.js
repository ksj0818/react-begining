import { Component } from "react";
import "./App.css";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Subject from "./components/Subject";
import Control from "./components/Control";

class App extends Component {
  constructor(props) {
    super(props);
    // state값 초기화
    this.state = {
      mode: "create",
      selected_content_id: 3,
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
      _desc,
      _article = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      // 기존에 있었던 리드컨텐츠를 아티클에 넣어줌
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      let i = 0;
      // state의 컨텐츠 길이보다 작을때 true
      while (i < this.state.contents.length) {
        // 컨텐츠의 데이터를 인덱스 순으로 data에 넣기
        let data = this.state.contents[i];
        // 컨텐츠id와 셀렉트id가 같다면 본문 내용 출력
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i += 1;
      }
      // 기존에 있었던 리드컨텐츠를 아티클에 넣어줌
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            // add contents to this.state.contents
            console.log(_title, _desc);
          }.bind(this)}
        ></CreateContent>
      );
    }

    return (
      <div>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          // Subject 컴포넌트에 props로 onChangePage 함수 전달
          onChangePage={function () {
            // this.state.mode = "welcome"; 이렇게 짜면 리액트는 state가 바뀐걸 모름
            // 이벤트가 호출되었을때 실행되는 함수 안에서는 this의 값이 컴포넌트 자기 자신을 가리키지 않고 아무 값도 세팅 되어있지 않음. 그렇기 때문에 undefined의 state를 읽으려고 했더니 error발생.
            // 이벤트를 설치할 때 this를 찾을 수 없어서 error가 발생하면 그냥 .bind(this)함수를 이벤트함수가 끝난 직후에 넣어주면된다.
            this.setState({
              mode: "welcome",
            });
          }.bind(this)}
        ></Subject>

        {/*데이터가 바뀌었다고 TOC의 로직을 바꿀 필요가 없다. */}
        <TOC
          // 인자값으로 id(e.target.dataset.id) 받음
          onChangePage={function (id) {
            // 인자값 타입이 스트링이기 때문에 넘버로 형변환 해주기
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>

        <Control
          onChangeMode={function (_mode) {
            // 이벤트가 실행됐을때 실행되어야 하는 함수를 handler라고도 부른다.
            this.setState({
              mode: _mode,
            });
          }.bind(this)}
        ></Control>

        {/* 가변적으로 변할수 있도록 하기 위해 변수 사용 */}
        {_article}
      </div>
    );
  }
}

export default App;
