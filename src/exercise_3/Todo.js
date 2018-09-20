// Tasks: 
//    1. Make the component a stateless one(a pure function);

import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const { title, completed } = this.props.todo;

    return (
      <div className='todo'>
        <div>Title: {title}</div>
        <div>
          Completed: <span>{ completed ? 'V' : 'X'}</span>
        </div>
      </div>
    )
  }
}

export default Todo;
