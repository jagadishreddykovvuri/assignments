import React, { Component } from "react";
import "./styles.css";
class EnterTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task
    };
  }
  onPressEnter = event => {
    if (event.keyCode === 13) {
      this.props.onPressEnter(event.target.value);
      this.setState({
        task: this.props.task
      });
    }
  };
  handleChange = event => {
    this.setState({
      task: event.target.value
    });
  };

  render() {
    return (
      <input
        value={this.state.task}
        className={"inputTag " + this.props.paddinggap}
        placeholder="What needs to be Done ?"
        onChange={this.handleChange}
        onKeyDown={this.onPressEnter}
        onBlur={this.props.onBlur}
      />
    );
  }
}
export default EnterTodo;
