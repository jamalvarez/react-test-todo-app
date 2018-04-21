import React from 'react';

const TodoFilters = ({filterArray, toggleFilter}) => {
  const filters = filterArray.map((filter) => {
    return <div key={filter.name} className='filter'>
    <input  name={filter.name} type='checkbox' checked={filter.active} onClick={toggleFilter(filter.name)}/>
    {filter.name}
    </div>
  });
  return (
    <div className='filters'>
      <span>Filter by:</span>
      {filters}
    </div>
  )
}

export default TodoFilters;