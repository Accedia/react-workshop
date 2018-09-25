// Tasks:
//    1. Complete the tasks in the Todo component's file in the current directory.

import React, { Component } from 'react';
import Todo from './Todo';

class Exercise_3 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        { id: '1114235532423', title: 'Buy groceries.', completed: false },
        { id: '2241252344324', title: 'Wash dishes.', completed: true },
        { id: '3343253423447', title: 'Learn React!', completed: false }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Accedia Workshops - ReactJS</h1>

        <div className="todos-container">
          {this.state.todos.map(currentTodo =>
            <Todo key={currentTodo.id} todo={currentTodo} />
          )}
        </div>
      </div>
    )
  }
}

export default Exercise_3;
