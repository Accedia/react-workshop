import React from 'react';

export default ({ todo }) => (
  <div className='todo'>
    <div>Title: {todo.title}</div>
    <div>Completed: {todo.completed ? 'true' : 'false'}</div>
  </div>
)