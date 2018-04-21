import React, { Component } from 'react';
import TodoInput from './TodoInput/TodoInput.jsx'
import TodoList from './TodoList/TodoList.jsx';
import TodoFilters from './TodoFilters/TodoFIlters.jsx';

class TodoApp extends Component {
  constructor(){
    super();
    this.state = {
      todoArray: [],
      filterArray: [
        {
          name:'Pending',
          filteringValue: false,
          active: false
        },
        {
          name: 'Done',
          filteringValue: true,
          actve: false
        }
      ],
      allTimeTodos: 0
    };

    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  doBonus(){
    const starshipsxhr = new XMLHttpRequest();

    starshipsxhr.open('GET','https://swapi.co/api/starships/');

    starshipsxhr.addEventListener('load',function(){
      var response = JSON.parse(this.responseText);
      var filteredResults = response.results.filter((spaceship)=> {
          return spaceship.name.match(/Millennium Falcon/);
      });
      if(filteredResults[0]){
          document.querySelector('footer').style.display='block';
          var peopleUrlArray = filteredResults[0].pilots;
          peopleUrlArray.forEach((url) => {
              const peoplexhr = new XMLHttpRequest();
                    peoplexhr.addEventListener('load', function(){
                        const peopleInfo = JSON.parse(this.responseText);
                        const newSpan = document.createElement('span');
                        newSpan.textContent = peopleInfo.name;
                        document.querySelector('footer').appendChild(newSpan);
                    });
                    peoplexhr.open('GET','https://swapi.co/api/people/'+url.match(/(\d+\/)$/)[1]);
                    peoplexhr.send();
          })
      }
    })
    starshipsxhr.send();
  }

  addTodo(todoText){
    if(todoText === 'Use the force, Luke.'){
      this.doBonus();
    } else {
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
  toggleFilter(toggleName){
    return () => {
      const modifiedFilters = this.state.filterArray.map((filter) =>(
        {
          ...filter,
          active: toggleName === filter.name ? !filter.active : filter.active
        }
      ))
      this.setState({
        filterArray:modifiedFilters
      });
    }
  }

  render(){
    const activeFilters = this.state.filterArray.filter(x => x.active);
    const appliedAllFilters = activeFilters.length === this.state.filterArray.length;
    const filteredTodos = activeFilters && !appliedAllFilters ?
    activeFilters.reduce((acc, filter) => {
      const newTodoArray = acc.filter((todo) => {
        return todo.done === filter.filteringValue
      });
      return newTodoArray;
    }, this.state.todoArray)
    : this.state.todoArray;
    

    return(
      <div className='todo-app'>
        <TodoInput addTodo={this.addTodo} />
        <TodoFilters
          filterArray={this.state.filterArray}
          toggleFilter={this.toggleFilter}/>
        <TodoList
          todoArray={filteredTodos}
          toggleFunction={this.toggleTodo}
          removeFunction={this.removeTodo}/>
      </div>
    )
  }
}

export default TodoApp;