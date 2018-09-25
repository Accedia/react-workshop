// Tasks:
//    1. Render 'V' or 'X' depending on the todo.completed flag(<span>{ #SOME_BOOLEAN_VALUE# ? 'V' : 'X'}</span>)

import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div className='todo'>
        <div>Title: {this.props.todo.title}</div>
      </div>
    )
  }
}

export default Todo;
