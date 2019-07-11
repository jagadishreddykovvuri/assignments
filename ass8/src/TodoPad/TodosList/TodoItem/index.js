import React, { Component } from "react";
import "./styles.css";

class TodoItem extends Component {
  handleCheck = () => {
    this.props.toggleTask(this.props.item);
  };
  render() {
    const itemToggle = this.props.item.taskStatus ? (
      <strike>&nbsp;{this.props.item.task}</strike>
    ) : (
      <p> &nbsp;{this.props.item.task}</p>
    );
    return (
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
          {itemToggle}
        </div>
        <img src="assets/remove.png" className="removeIcon" />
      </div>
    );
  }
}
export default TodoItem;
