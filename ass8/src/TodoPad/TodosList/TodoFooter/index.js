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
    let UndoneLeft = 0,
      filterDiv;
    UndoneLeft = this.props.todoList.filter(function(item) {
      return item.taskStatus === false;
    });
    UndoneLeft = UndoneLeft.length;

    if (this.props.highLighter === "All") {
      filterDiv = (
        <div className="list-loader">
          <p className="border" onClick={this.handleAll}>
            All
          </p>
          <p onClick={this.handleActive}>Active</p>
          <p onClick={this.handleCompleted}>Completed</p>
        </div>
      );
    } else if (this.props.highLighter === "Active") {
      filterDiv = (
        <div className="list-loader">
          <p onClick={this.handleAll}>All</p>
          <p className="border" onClick={this.handleActive}>
            Active
          </p>
          <p onClick={this.handleCompleted}>Completed</p>
        </div>
      );
    } else {
      filterDiv = (
        <div className="list-loader">
          <p onClick={this.handleAll}>All</p>
          <p onClick={this.handleActive}>Active</p>
          <p className="border" onClick={this.handleCompleted}>
            Completed
          </p>
        </div>
      );
    }
    return (
      <div className="footer-back">
        <p>{UndoneLeft + " "}item left</p>
        {filterDiv}
        <p onClick={this.handleClear}>Clear completed</p>
      </div>
    );
  }
}
export default TodoFooter;
