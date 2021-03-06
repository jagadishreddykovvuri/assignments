import React, { Component } from "react";
import "./styles.css";
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";
import filtersOfTodoList from "../constant";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applyedFliterType: "All"
    };
  }
  onChangeFilterType = filterValue => {
    this.setState({
      applyedFliterType: filterValue
    });
  };
  footer = () => {
    let todoList = this.props.todoList;
    let unDoneLeft = this.props.todoList.filter(item => !item.taskStatus);
    if (todoList.length > 0) {
      return (
        <TodoFooter
          todoList={this.props.todoList}
          onChangeFilterType={this.onChangeFilterType}
          onClearCompletedTask={this.props.onClearCompletedTask}
          applyedFliterType={this.state.applyedFliterType}
          unDoneLeft={unDoneLeft.length}
        />
      );
    }
  };
  render() {
    let todoList = this.props.todoList;
    if (this.state.applyedFliterType === filtersOfTodoList.active) {
      todoList = todoList.filter(item => !item.taskStatus);
    } else if (this.state.applyedFliterType === filtersOfTodoList.completed) {
      todoList = todoList.filter(item => item.taskStatus);
    } else {
    }
    return (
      <div>
        {todoList.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              item={todo}
              onToggleTaskDone={this.props.onToggleTaskDone}
              onDeleteItem={this.props.onDeleteItem}
              onUpdateTask={this.props.onUpdateTask}
            />
          );
        })}
        {this.footer()}
      </div>
    );
  }
}
export default TodoList;
