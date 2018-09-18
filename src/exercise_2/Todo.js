import React from 'react';

// Tasks:
//    1. Render the todo.completed flag

class Todo extends React.Component {
  render() {
    return (
      <div>Title: {this.props.todo.title}</div>
    )
  }
}

export default Todo