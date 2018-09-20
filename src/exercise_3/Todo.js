import React from 'react';

// Tasks: 
//    1. Make the component a stateless one.

class Todo extends React.Component {
  render() {
    return (
      <div className='todo'>
        <div>Title: {todo.title}</div>
        <div>Completed: {todo.completed ? 'true' : 'false'}</div>
      </div>
    )
  }
}

export default Todo