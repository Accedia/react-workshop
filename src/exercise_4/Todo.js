// Tasks: 
//    1. Wire up the onClick event handler(line 11) with the callback that is received via props from the parent component.

import React from 'react';

const Todo = props => {
  // Hint - you will need to use something from the props for the callback.
  const { title, completed } = props.todo;

  return (
    <div className='todo' onClick={ () => null }>
      <div>Title: { title }</div>
      <span>{ completed ? 'V' : 'X' }</span>
    </div>
  );
}

export default Todo;
