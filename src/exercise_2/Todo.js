// Tasks:
//    1. Render 'V' or 'X' depending on the todo's completed flag(<span>{ #REPLACE_THIS# ? 'V' : 'X'}</span>) below the title.

import React, { Component } from 'react';

class Todo extends Component {
  // Note that you are expecting an object from the parent component that is accessible via this.props.todo.
  render() {
    return (
      <div className='todo'>
        <div>Title: { this.props.todo.title }</div>
      </div>
    )
  }
}

export default Todo;
