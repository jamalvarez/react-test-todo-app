import React from 'react';
import Todo from './Todo.jsx';

const TodoList = ({ todoArray, toggleFunction, removeFunction }) => {
  const todos = todoArray.map((todo) => {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        toggle={toggleFunction(todo.id)}
        remove={removeFunction(todo.id)}
      />
    )
  });

  return(
    <div className='list-container'>
      <div className='list'>
      {todos}
      </div>
    </div>
    )
}

export default TodoList;