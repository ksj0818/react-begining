import React, { Component } from "react";

class Control extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a
              href="/"
              onClick={function (e) {
                e.preventDefault();
                this.props.onChangeMode("create");
              }.bind(this)}
            >
              create
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={function (e) {
                e.preventDefault();
                this.props.onChangeMode("update");
              }.bind(this)}
            >
              update
            </a>
          </li>
          <li>
            <input
              type="button"
              value="delete"
              onClick={function (e) {
                e.preventDefault();
                this.props.onChangeMode("delete");
              }.bind(this)}
            ></input>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Control;
