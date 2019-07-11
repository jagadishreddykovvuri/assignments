import React, { Component } from "react";
import "./styles.css";
import EnterTodo from "./EnterTodo";
import TodoList from "./TodosList";
class TodoPad extends Component {
  constructor(props) {
    super(props);
    this.randomid = 0;
    this.state = {
      todoList: []
    };
  }
  getTodo = value => {
    this.randomid = this.randomid + 1;
    var todo = { id: "", task: "", taskStatus: false };
    todo.id = this.randomid;
    todo.task = value;
    var join = this.state.todoList.concat(todo);
    this.setState({
      todoList: join
    });
  };
  render() {
    console.log(this.state.todoList);
    return (
      <>
        <div className="backGround">
          <h1 className="heading">Todos</h1>
          <EnterTodo getting={this.getTodo} />
          <TodoList />
        </div>
      </>
    );
  }
}
export default TodoPad;
