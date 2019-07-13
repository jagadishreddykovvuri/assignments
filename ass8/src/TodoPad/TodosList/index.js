import React, { Component } from "react";
import "./styles.css";
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.randomid = 0;
    this.state = {
      filterCode: "All"
    };
  }
  userFliter = filterValue => {
    this.setState({
      filterCode: filterValue
    });
  };
  render() {
    let todoList = this.props.todoList;
    let footer = <div />;
    if (todoList.length > 0) {
      footer = (
        <TodoFooter
          todoList={this.props.todoList}
          filterCode={this.userFliter}
          onClear={this.props.onClear}
          highLighter={this.state.filterCode}
        />
      );
    }
    if (this.state.filterCode === "Active") {
      todoList = todoList.filter(function(item) {
        return item.taskStatus === false;
      });
    } else if (this.state.filterCode === "Completed") {
      todoList = todoList.filter(function(item) {
        return item.taskStatus === true;
      });
    } else {
    }
    return (
      <div>
        {todoList.map(todo => {
          return (
            <TodoItem
              item={todo}
              toggleTask={this.props.toggleTaskDone}
              onDeleting={this.props.onDeleting}
              onUpdate={this.props.onUpdate}
            />
          );
        })}
        {footer}
      </div>
    );
  }
}
export default TodoList;
