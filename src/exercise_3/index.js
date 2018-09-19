import React from 'react';
import Todo from './Todo';

// Tasks:
//    1. Complete the tasks in the Todo component.

class Exercise_3 extends React.Component {
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
        <h1>Accedia React Workshop</h1>

        <div className="todos-container">
          {this.state.todos.map(todo =>
            <Todo todo={todo} key={todo.id} />
          )}
        </div>
      </div>
    )
  }
}

export default Exercise_3