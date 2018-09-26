// Tasks:
//    1. Make sure that you can toggle the state of each todo separately from completed to pending and vice versa(line 27).
//    2. You will also need to check the callback that we are passing to the Todo component(line 42).

import React, { Component } from 'react';
import Todo from './Todo';

class Exercise_4 extends Component {
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

  toggleTodoState = id => {
    // In the two rows below we clone the todos from the state and then find the clicked todo. We need to flip its completed flag.
    const newTodos = [ ...this.state.todos ];
    const toggledTodo = newTodos.find(todo => todo.id === id);

    // Flip the completed flag and rewrite it in the this.state.todos array.
    console.log('This Todo was toggled', toggledTodo);
  }

  render() {
    return (
      <div>
        <h1>Accedia Workshops - ReactJS</h1>

        <div className="todos-container">
          { this.state.todos.map(currentTodo =>
            // Note how we are again passing the toggleTodoState call as a callback rather than invoking the function directly.
            // You need to check ./Todo.js and see how to handle the onClickHandlerThatWeNeedToWrite callback that we are passing.
            <Todo 
              key={ currentTodo.id } 
              todo={ currentTodo } 
              onClickHandlerThatWeNeedToWrite={ id => this.toggleTodoState(id) }
            />
          ) }
        </div>
      </div>
    );
  }
}

export default Exercise_4;
