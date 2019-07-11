import React, { Component } from "react";
import "./styles.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.randomid = 0;
    this.state = {};
  }
  render() {
    console.log(this.state.todoList);
    return (
      <>
        <div className="todo-back">
          <div className="round">
            <input type="checkbox" id="checkbox" />
            <label for="checkbox" />
          </div>
          <p>jagadish</p>
        </div>
      </>
    );
  }
}
export default TodoItem;
