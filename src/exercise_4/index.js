// Tasks:
//    1. Update the state when a new todo is added(rewrite line 39).
//    2. Make sure that you can toggle the state of each todo separately from completed to pending and vice versa(line 46).

import React, { Component } from 'react';
import Todo from './Todo';

class Exercise_4 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      newTodoTitle: ''
    }
  }

  componentDidMount() {
    // Fetch is a built in XHR(AJAX) client with a Promise based API
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        this.setState({ todos });
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: this.state.newTodoTitle,
      completed: false
    }

    // Note: React will only know you've updated the state
    // if there is a difference in the state references,
    // so we should not mutate the state object.
    // Rather we use: this.setState(...).
    console.log('New Todo submitted', newTodo);
  }

  toggleTodoState = (id) => {
    const newTodos = this.state.todos;
    const toggledTodo = newTodos.find(todo => todo.id === id);

    console.log(toggledTodo);
  }

  render() {
    return (
      <div>
        <h1>Accedia Workshops - ReactJS</h1>

        <form onSubmit={this.handleSubmit}>
          <input 
            value={ this.state.newTodoTitle } 
            onChange={event => this.setState({ newTodoTitle: event.target.value })} 
          />
          <input type="submit" />
        </form>

        <div className="todos-container">
          {this.state.todos.map(currentTodo =>
            <Todo 
              key={currentTodo.id} 
              todo={currentTodo} 
              onClick={() => this.toggleTodoState(currentTodo.id)}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Exercise_4;
