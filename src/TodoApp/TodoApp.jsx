import React, { Component } from 'react';
import TodoInput from './TodoInput/TodoInput.jsx'
import TodoList from './TodoList/TodoList.jsx';
import TodoFilters from './TodoFilters/TodoFIlters.jsx';

class TodoApp extends Component {
  constructor(){
    super();
    this.state = {
      todoArray: [],
      appliedFilters: [],
      allTimeTodos: 0
    };

    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText){
    const previousTodosAmount = this.state.allTimeTodos;
    const newTodo = {
      id: previousTodosAmount,
      text:todoText,
      done: false
    }
    const modifiedTodoArray = [...this.state.todoArray, newTodo];
    this.setState({
      todoArray: modifiedTodoArray,
      allTimeTodos: previousTodosAmount + 1 
    })
  }

  toggleTodo(todoId){
    return () => {
      const modifiedTodoArray = this.state.todoArray.map((todo) => (
          {
            ...todo,
            done: todo.id === todoId ? !todo.done : todo.done
          }
        )
      );

      this.setState({
        todoArray : modifiedTodoArray
      });
    }
  }
  removeTodo(todoId){
    return () => {
      const modifiedTodoArray = this.state.todoArray.filter((todo) => todo.id !== todoId);
      this.setState({
        todoArray : modifiedTodoArray
      })
    }
  }

  render(){
    return(
      <div className='todo-app'>
        <TodoInput addTodo={this.addTodo}/>
        <TodoFilters />
        <TodoList
          todoArray={this.state.todoArray}
          toggleFunction={this.toggleTodo}
          removeFunction={this.removeTodo}/>
      </div>
    )
  }
}

export default TodoApp;