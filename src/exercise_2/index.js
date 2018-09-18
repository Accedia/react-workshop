import React from 'react';
import Todo from './Todo';

// Tasks:
//    1. Complete the exercise with no console errors.
//    2. Complete the tasks in the Todo component.

class Exercise_2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        { title: 'Buy groceries.', completed: false },
        { title: 'Wash dishes.', completed: true },
        { title: 'Learn React!', completed: false }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Accedia React Workshop</h1>

        {this.state.todos.map((todo, index) =>
          <Todo todo={todo} />
        )}

      </div>
    )
  }
}

export default Exercise_2