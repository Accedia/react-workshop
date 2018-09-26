// Tasks:
//    1. Complete the handleSubmit method implementation.

import React, { Component } from 'react';
import Todo from './Todo';

class Exercise_6 extends Component {
  constructor(props) {
    super(props);

    // We have the newTodoTitle below - a piece of the state that will be used for the input field.
    this.state = {
      todos: [],
      newTodoTitle: ''
    };
  }

  componentDidMount() {
    const urlToFetchFrom = 'https://jsonplaceholder.typicode.com/todos?_limit=5';

    fetch(urlToFetchFrom)
      .then(response => response.json())
      .then(todos => {
        this.setState({ todos });
      });
  }

  handleSubmit = event => {
    // We prevent the default browser behaviour upon submitting a form.
    event.preventDefault();

    // Below we construct the new todo that we will be adding.
    const newTodo = {
      // This returns an unique datestamp that we use for ID.
      id: Date.now(),
      // You need to appropriately update the new todo's title.
      title: null,
      // Setting the completed flag to be false by default.
      completed: false
    }

    // Note: React will only know you've updated the state if there is a difference in the state references,
    // so we should not mutate the state object(we must return a new object).
    // That is why we use the this.setState() method for updating our state. You need to put the new todo in the this.state.todos collection.
    // We may use the fancy ES6 spread syntax [...collection, newItem] which adds a new item to a collection.
    console.log('New Todo submitted', newTodo);

    // Finally, once we have updated our todos, we clean the form's input field.
    this.setState({ newTodoTitle: '' });
  }

  toggleTodoState = id => {
    const newTodos = [ ...this.state.todos ];
    const toggledTodo = newTodos.find(todo => todo.id === id);

    toggledTodo.completed = !toggledTodo.completed;

    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div>
        <h1>Accedia Workshops - ReactJS</h1>

        { /* Note that we are not calling this.handleSubmit(). We are rather passing a reference to it to be used as a callback. */ }
        <form onSubmit={ this.handleSubmit }>
          {/* Note how we are reading the input value from state and updating the state upon every input field change. */}
          {/* By doing this, we always have up-to-date information in our state that we can easily use later. */}
          <input 
            value={ this.state.newTodoTitle } 
            onChange={ event => this.setState({ newTodoTitle: event.target.value }) } 
          />
        </form>

        <div className="todos-container">
          { this.state.todos.map(currentTodo =>
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

export default Exercise_6;
