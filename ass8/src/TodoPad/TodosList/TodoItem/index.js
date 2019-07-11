import React, { Component } from "react";
import "./styles.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.randomid = 0;
    this.state = {};
  }
  handleCheck = () => {
    this.props.isdone(this.props.item);
  };
  render() {
    var printerItem = [];
    if (this.props.item.taskStatus) {
      printerItem.push(<strike>&nbsp;{this.props.item.task}</strike>);
    } else {
      printerItem.push(<p> &nbsp;{this.props.item.task}</p>);
    }
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
            {printerItem}
          </div>
          <img src="assets/remove.png" className="removeIcon" />
        </div>
      </>
    );
  }
}
export default TodoItem;
