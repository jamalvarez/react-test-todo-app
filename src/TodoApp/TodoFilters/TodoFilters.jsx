import React from 'react';

const TodoFilters = () => {
  return (
    <div className='filters'>
      <span>Filter by:</span>
      <div className='filter'><input type='checkbox' />Pending</div>
      <div className='filter'><input type='checkbox' />Done</div>
    </div>
  )
}

export default TodoFilters;