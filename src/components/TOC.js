import React, { Component } from "react";

class TOC extends Component {
  render() {
    // 전달 받은 데이터 넣어주기
    let data = this.props.data;
    // 데이터 객체별로 저장할 배열
    let list = [];
    for (let i = 0; i < data.length; i++) {
      list.push(
        <li key={data[i].id}>
          <a
            href="/"
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>
      );
    }
    return (
      <div>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default TOC;
