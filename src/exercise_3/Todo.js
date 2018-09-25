// Tasks: 
//    1. Make the component a stateless one(a pure function). Remember that the this keyword is not applicable while using a stateless component.

import React, { Component } from 'react';

class Todo extends Component {
  render() {
    // This is a fancy ES6 syntax which is basically equivalent to the following two lines:
    // const title = this.props.todo.title;
    // const completed = this.props.todo.completed;
    const { title, completed } = this.props.todo;

    return (
      <div className='todo'>
        <div>Title: { title }</div>
        <span>{ completed ? 'V' : 'X'}</span>
      </div>
    )
  }
}

export default Todo;
