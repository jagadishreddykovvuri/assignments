import React, { Component } from "react";
import "./styles.css";
class TodoFooter extends Component {
  handleAll = () => {
    this.props.filterCode("All");
  };
  handleActive = () => {
    this.props.filterCode("Active");
  };
  handleCompleted = () => {
    this.props.filterCode("Completed");
  };
  handleClear = () => {
    this.props.onClear();
  };

  render() {
    let UndoneLeft = 0;
    UndoneLeft = this.props.todoList.filter(function(item) {
      return item.taskStatus === false;
    });
    UndoneLeft = UndoneLeft.length;
    return (
      <div className="footer-back">
        <p>{UndoneLeft + " "}item left</p>
        <div className="list-loader">
          <p onClick={this.handleAll}>All</p>
          <p onClick={this.handleActive}>Active</p>
          <p onClick={this.handleCompleted}>Completed</p>
        </div>
        <p onClick={this.handleClear}>Clear completed</p>
      </div>
    );
  }
}
export default TodoFooter;
