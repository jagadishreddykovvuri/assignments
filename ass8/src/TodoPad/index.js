import React, { Component } from "react";
import "./styles.css";
import EnterTodo from "./EnterTodo";
import TodoList from "./TodosList";
class TodoPad extends Component {
  constructor(props) {
    super(props);
    this.randomId = 0;
    this.todoList = [];
    this.state = {
      todoList: []
    };
  }
  onAddTodo = value => {
    value = value.replace(/^\s+/g, "");
    if (value !== "") {
      this.randomId = this.randomId + 1;
      const todo = { id: this.randomId, task: value, taskStatus: false };
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

  onClearCompletedTask = () => {
    let todoList = this.state.todoList;
    this.setState({
      todoList: todoList.filter(todo => !todo.taskStatus)
    });
  };
  onUpdateTask = (item, task) => {
    task = task.replace(/^\s+/g, "");
    if (task !== "") {
      let todoList = this.state.todoList;
      const index = todoList.indexOf(item);
      todoList[index].task = task;
      this.setState({
        todoList: todoList
      });
    }
  };
  render() {
    return (
      <div className="background">
        <div className="todo-pad">
          <h1 className="heading">Todos</h1>
          <div class="stack-shadow">
            <EnterTodo onPressEnter={this.onAddTodo} task="" />

            <TodoList
              todoList={this.state.todoList}
              onToggleTaskDone={this.onToggleTaskDone}
              onDeleteItem={this.onDeleteItem}
              onClearCompletedTask={this.onClearCompletedTask}
              onUpdateTask={this.onUpdateTask}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default TodoPad;
