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
  onAddTodo = value => {
    this.randomid = this.randomid + 1;
    const todo = { id: this.randomid, task: value, taskStatus: false };
    this.setState({
      todoList: this.state.todoList.concat(todo)
    });
  };
  toggleTaskDone = item => {
    let todoList = this.state.todoList;
    const index = todoList.indexOf(item);
    item.taskStatus = !item.taskStatus;
    todoList[index] = item;
    this.setState({
      todoList: todoList
    });
  };
  render() {
    return (
      <div className="backGround">
        <h1 className="heading">Todos</h1>
        <EnterTodo onAddTodo={this.onAddTodo} />
        <TodoList
          todoList={this.state.todoList}
          toggleTaskDone={this.toggleTaskDone}
        />
      </div>
    );
  }
}
export default TodoPad;
