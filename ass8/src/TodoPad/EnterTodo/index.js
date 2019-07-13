import React, { Component } from "react";
import "./styles.css";
class EnterTodo extends Component {
  constructor(props) {
    super(props);
    this.randomid = 0;
    this.state = {
      task: this.props.task
    };
  }
  pressedEnter = e => {
    if (e.keyCode === 13) {
      this.props.onEdit(e.target.value);
      this.setState({
        task: this.props.task
      });
    }
  };
  handleChange = e => {
    this.setState({
      task: e.target.value
    });
  };

  render() {
    return (
      <input
        value={this.state.task}
        className={"inputTag " + this.props.paddinggap}
        placeholder="What needs to be Done ?"
        onChange={this.handleChange}
        onKeyDown={this.pressedEnter}
        onBlur={this.props.onBlur}
      />
    );
  }
}
export default EnterTodo;
