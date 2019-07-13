import React, { Component } from "react";
import "./styles.css";
class TaskItem extends Component {
  handleCheck = () => {
    this.props.onToggleTaskDone(this.props.item);
  };
  itemToggle = () => {
    return this.props.item.taskStatus ? (
      <div className="checkWithItem">
        <div>
          <img
            className="check-box-size clickable"
            onClick={this.handleCheck}
            src="assets/checked.png"
          />
        </div>
        <strike className="blur">{this.props.task()}</strike>
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
        {this.props.task()}
      </div>
    );
  };
  render() {
    return <>{this.itemToggle()}</>;
  }
}
export default TaskItem;
