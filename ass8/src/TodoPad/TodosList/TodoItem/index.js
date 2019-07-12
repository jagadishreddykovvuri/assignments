import React, { Component } from "react";
import "./styles.css";
import EnterTodo from "../../EnterTodo";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.randomid = 0;
    this.state = {
      isDoubleClick: false
    };
  }
  handleCheck = () => {
    this.props.toggleTask(this.props.item);
  };
  onDelete = () => {
    if (window.confirm("you to want delete task ? " + this.props.item.task)) {
      this.props.onDeleting(this.props.item);
    }
  };
  onDoubleClick = () => {
    this.setState({
      isDoubleClick: true
    });
  };
  onUpdate = task => {
    this.props.onUpdate(this.props.item, task);
    this.setState({
      isDoubleClick: false
    });
  };
  render() {
    const task = this.state.isDoubleClick ? (
      <EnterTodo onEdit={this.onUpdate} task={this.props.item.task} />
    ) : (
      <p onDoubleClick={this.onDoubleClick}> &nbsp;{this.props.item.task}</p>
    );
    const itemToggle = this.props.item.taskStatus ? (
      <div className="checkWithItem">
        <div>
          <input
            type="checkbox"
            className="round"
            id="checkbox"
            onChange={this.handleCheck}
            checked
          />
        </div>
        <strike>{task}</strike>
      </div>
    ) : (
      <div className="checkWithItem">
        <div>
          <input
            type="checkbox"
            className="round"
            id="checkbox"
            onChange={this.handleCheck}
          />
        </div>
        {task}
      </div>
    );

    return (
      <div className="todo-back">
        {itemToggle}
        <img
          src="assets/remove.png"
          className="removeIcon"
          onClick={this.onDelete}
        />
      </div>
    );
  }
}
export default TodoItem;
