// Tasks:
//    1. Output the list of todos(see line 29), use the Todo component in the current working directory, it is already imported(line 7).
//    2. Complete the exercise with no console errors regarding keys.
//    3. Complete the tasks in the Todo component's file.

import React, { Component } from 'react';
import Todo from './Todo';

class Exercise_2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        { id: '111', title: 'Buy groceries.', completed: false },
        { id: '222', title: 'Wash dishes.', completed: true },
        { id: '333', title: 'Learn React!', completed: false }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Accedia Workshops - ReactJS</h1>

        <div>
          {this.state.todos.map(todo =>
            console.log(todo)
          )}
        </div>
      </div>
    )
  }
}

export default Exercise_2;
