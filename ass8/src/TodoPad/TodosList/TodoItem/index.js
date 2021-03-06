import React, { Component } from "react";
import "./styles.css";
import EnterTodo from "../../EnterTodo";
import TaskItem from "./TaskItem";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDoubleClick: false
    };
  }
  handleCheck = () => {
    this.props.toggleTask(this.props.item);
  };
  onDelete = () => {
    if (window.confirm("you to want delete task ? " + this.props.item.task)) {
      this.props.onDeleteItem(this.props.item);
    }
  };
  onDoubleClick = () => {
    this.setState({
      isDoubleClick: true
    });
  };
  onUpdate = task => {
    this.props.onUpdateTask(this.props.item, task);
    this.setState({
      isDoubleClick: false
    });
  };
  handleBlur = () => {
    this.setState({
      isDoubleClick: false
    });
  };
  task = () => {
    return this.state.isDoubleClick ? (
      <EnterTodo
        onBlur={this.handleBlur}
        onPressEnter={this.onUpdate}
        task={this.props.item.task}
        paddinggap="padding-gap"
      />
    ) : (
      <p className="taskStyle" onDoubleClick={this.onDoubleClick}>
        {this.props.item.task}
      </p>
    );
  };
  render() {
    return (
      <div className="todo-back">
        <TaskItem
          item={this.props.item}
          onToggleTaskDone={this.props.onToggleTaskDone}
          task={this.task}
        />

        <img
          src="assets/remove.png"
          className="removeIcon clickable"
          onClick={this.onDelete}
        />
      </div>
    );
  }
}
export default TodoItem;
