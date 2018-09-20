// Tasks: 
//    1. Wire up the onClick event handler(line 10) with the callback that is received via props from the parent component.

import React from 'react';

const Todo = (props) => {
  const { title, completed } = props.todo;

  return (
    <div className='todo' onClick={() => console.log('You need to wire up the callback that is passed with the props')}>
      <div>Title: {title}</div>
      <div>
        Completed: <span>{ completed ? 'V' : 'X'}</span>
      </div>
    </div>
  );
}

export default Todo;
