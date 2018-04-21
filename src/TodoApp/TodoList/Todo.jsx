import React from 'react';

const Todo = ({ todo, toggle, remove }) => {
  return (
    <div className={'todo' + (todo.done ? ' done' : '')}>
      <div className='text'>
        <h2>{todo.text}</h2>
      </div>
        <div className='checkbox' onClick={toggle}>
          <input type='checkbox'/>
      </div>
      <div className='remove' onClick={remove}>
        <span>Remove</span>
      </div>
    </div>
  );
}

export default Todo;