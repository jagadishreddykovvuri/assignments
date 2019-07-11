import React, { Component } from "react";
import "./styles.css";
class EnterTodo extends Component {
  pressedEnter = e => {
    if (e.keyCode === 13) {
      this.props.onAddTodo(e.target.value);
      e.target.value = "";
    }
  };

  render() {
    return (
      <input
        className="inputTag"
        placeholder="What needs to be Done ?"
        onKeyDown={this.pressedEnter}
      />
    );
  }
}
export default EnterTodo;
