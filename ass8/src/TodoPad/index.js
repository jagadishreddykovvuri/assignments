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
    if (value !== "") {
      this.randomid = this.randomid + 1;
      const todo = { id: this.randomid, task: value, taskStatus: false };
      this.setState({
        todoList: this.state.todoList.concat(todo)
      });
    }
  };
  onToggleTaskDone = item => {
    let todoList = this.state.todoList;
    const index = todoList.indexOf(item);
    item.taskStatus = !item.taskStatus;
    todoList[index] = item;
    this.setState({
      todoList: todoList
    });
  };
  onDeleteItem = item => {
    let todoList = this.state.todoList;
    todoList.splice(todoList.indexOf(item), 1);
    this.setState({
      todoList: todoList
    });
  };
  onClearing = () => {
    let todoList = this.state.todoList;
    todoList = todoList.filter(function(item) {
      return item.taskStatus === false;
    });
    this.setState({
      todoList: todoList
    });
  };
  onUpdate = (item, task) => {
    let todoList = this.state.todoList;
    const index = todoList.indexOf(item);
    todoList[index].task = task;
    this.setState({
      todoList: todoList
    });
  };
  render() {
    console.log(this.state.todoList);
    return (
      <div className="background">
        <div className="todo-pad">
          <h1 className="heading">Todos</h1>
          <div class="stack-shadow">
            <EnterTodo onEdit={this.onAddTodo} task="" />
            <TodoList
              todoList={this.state.todoList}
              toggleTaskDone={this.onToggleTaskDone}
              onDeleting={this.onDeleteItem}
              onClear={this.onClearing}
              onUpdate={this.onUpdate}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default TodoPad;
