import React from 'react';

const Todo = ({ todo, toggle, remove }) => {
  const statusButtonText = todo.done ? 'Done!' : 'Pending';
  return (
    <div className={'todo' + (todo.done ? ' done' : '')}>
      <div className='text'>
        <h2>{todo.text}</h2>
      </div>
        <div className='toggle-button' onClick={toggle}>
          <h2>{statusButtonText} </h2>
      </div>
      <div className='remove' onClick={remove}>
        <span>Remove</span>
      </div>
    </div>
  );
}

export default Todo;