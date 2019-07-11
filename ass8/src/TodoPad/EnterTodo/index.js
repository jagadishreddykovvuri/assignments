import React, { Component } from "react";
import "./styles.css";
class EnterTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  pressedEnter = e => {
    if (e.keyCode === 13) {
      this.props.getting(e.target.value);
      e.target.value = "";
    }
  };
  render() {
    return (
      <>
        <input
          className="inputTag"
          placeholder="What needs to be Done ?"
          onKeyDown={this.pressedEnter}
        />
      </>
    );
  }
}
export default EnterTodo;
