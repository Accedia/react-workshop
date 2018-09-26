// Tasks:
//    1. Complete the tasks in the Todo component's file.
//    2. Output the list of todos(see line 30), use the Todo component in the current working directory, it is already imported(line 7).
//    3. Complete the exercise with no console errors regarding keys. Feel free to browse StackOverflow for info regarding the error.

import React, { Component } from 'react';
import Todo from './Todo';

class Exercise_2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: '1114235532423', title: 'Buy groceries.', completed: false },
        { id: '2241252344324', title: 'Wash dishes.', completed: true },
        { id: '3343253423447', title: 'Learn React!', completed: false }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Accedia Workshops - ReactJS</h1>

        <div className="todos-container">
          { this.state.todos.map(currentTodo =>
            // Check what is logged in your browser's console and appropriately rewrite the next line.
            console.log(currentTodo)
          ) }
        </div>
      </div>
    );
  }
}

export default Exercise_2;
