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
  handleBlur = () => {
    this.setState({
      isDoubleClick: false
    });
  };
  render() {
    const task = this.state.isDoubleClick ? (
      <EnterTodo
        onBlur={this.handleBlur}
        onEdit={this.onUpdate}
        task={this.props.item.task}
        paddinggap="padding-gap"
      />
    ) : (
      <p className="taskStyle" onDoubleClick={this.onDoubleClick}>
        {this.props.item.task}
      </p>
    );
    console.log(this.props.item);
    const itemToggle = this.props.item.taskStatus ? (
      <div className="checkWithItem">
        <div>
          <img
            className="check-box-size clickable"
            onClick={this.handleCheck}
            src="assets/checked.png"
          />
        </div>
        <strike className="blur">{task}</strike>
      </div>
    ) : (
      <div className="checkWithItem">
        <div>
          <img
            className="check-box-size clickable"
            onClick={this.handleCheck}
            src="assets/uncheck.png"
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
          className="removeIcon clickable"
          onClick={this.onDelete}
        />
      </div>
    );
  }
}
export default TodoItem;
