import React, { Component } from "react";
import "./styles.css";
import TodoItem from "./TodoItem";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.randomid = 0;
    this.state = {};
  }
  render() {
    console.log(this.state.todoList);
    return (
      <>
        {this.props.array.map(todo => {
          return (
            <>
              <TodoItem item={todo} isdone={this.props.isdone} />
            </>
          );
        })}
      </>
    );
  }
}
export default TodoList;
