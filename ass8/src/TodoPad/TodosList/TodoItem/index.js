import React, { Component } from "react";
import "./styles.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.randomid = 0;
    this.state = {};
  }
  handleCheck = () => {};
  render() {
    console.log(this.state.todoList);
    return (
      <>
        <div className="todo-back">
          <div className="checkWithItem">
            <div>
              <input
                type="checkbox"
                className="round"
                id="checkbox"
                onChange={this.handleCheck}
              />
            </div>
            <br />
            <p> &nbsp;{this.props.item.task}</p>
          </div>
          <img src="assets/remove.png" className="removeIcon" />
        </div>
      </>
    );
  }
}
export default TodoItem;
