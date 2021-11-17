import React, { Component } from "react";

class TOC extends Component {
  render() {
    let data = this.props.data;
    let i = 0;
    let list = [];
    // 반복문이 실행될 때마다 list배열에 push하기.
    while (i < data.length) {
      list.push(
        /* 
          엘리먼트 여러 개를 자동으로 생성 시 콘솔창에 error 발생한다.
          Why? 각각의 리스트 항목들은 key라고 하는 props를 가지고 있어야 하기 때문이다.
        */
        <li key={data[i].id}>
          {/* 3. list 항목 링크 클릭 시 해당컨텐츠가 본문 내용에 출력 */}
          <a href={"/content/" + data[i].id}>{data[i].title}</a>
        </li>
      );
      i += 1;
    }
    return (
      <nav>
        <ul>{list}</ul>
      </nav>
    );
  }
}

export default TOC;
