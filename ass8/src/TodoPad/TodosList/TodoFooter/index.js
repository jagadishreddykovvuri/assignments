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
    let unDoneLeft = 0,
      filterDiv;
    unDoneLeft = this.props.todoList.filter(function(item) {
      return item.taskStatus === false;
    });
    unDoneLeft = unDoneLeft.length;

    if (this.props.highLighter === "All") {
      filterDiv = (
        <div className="list-loader">
          <p className="border clickable" onClick={this.handleAll}>
            All
          </p>
          <p className="clickable" onClick={this.handleActive}>
            Active
          </p>
          <p className="clickable" onClick={this.handleCompleted}>
            Completed
          </p>
        </div>
      );
    } else if (this.props.highLighter === "Active") {
      filterDiv = (
        <div className="list-loader">
          <p className="clickable" onClick={this.handleAll}>
            All
          </p>
          <p className="border clickable" onClick={this.handleActive}>
            Active
          </p>
          <p className="clickable" onClick={this.handleCompleted}>
            Completed
          </p>
        </div>
      );
    } else {
      filterDiv = (
        <div className="list-loader">
          <p className="clickable " onClick={this.handleAll}>
            All
          </p>
          <p className="clickable" onClick={this.handleActive}>
            Active
          </p>
          <p className="border clickable" onClick={this.handleCompleted}>
            Completed
          </p>
        </div>
      );
    }
    return (
      <div className="footer-back">
        <p>{unDoneLeft + " "}item left</p>
        {filterDiv}
        <p className="onhover clickable" onClick={this.handleClear}>
          Clear completed
        </p>
      </div>
    );
  }
}
export default TodoFooter;
