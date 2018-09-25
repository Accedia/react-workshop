// Tasks:
//    1. Update the state when a new todo is added(rewrite line 51).
//    2. Make sure that you can toggle the state of each todo separately from completed to pending and vice versa(line 60).
//    You will also need to check the callback that we are passing to the Todo component(line 87). This is a tough one.

import React, { Component } from 'react';
import Todo from './Todo';

class Exercise_4 extends Component {
  constructor(props) {
    super(props);

    // Here we initialize the todos's empty array which we will later fill from the API call.
    // We also have the newTodoTitle - a piece of the state that will be used for the input field.
    this.state = {
      todos: [],
      newTodoTitle: ''
    };
  }

  componentDidMount() {
    // Fetch is a built in XHR(AJAX) client with a Promise based API - basically we send a get request.
    // We use a sample public API that returns mock data.
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      // We make sure that the response is in JSON data format prior to using the data.
      .then(response => response.json())
      // We now set this.state.todos to be the API's response.
      // We use the setState({}) syntax in order to comply with React's immutability recommendations.
      // Again ES6 syntax heads up: when the key and value match such as { todos: todos }, this is equivalent to { todos }.
      .then(todos => {
        this.setState({ todos });
      });
  }

  handleSubmit = event => {
    event.preventDefault();

    const newTodo = {
      // This returns an unique datestamp that we use for ID.
      id: Date.now(),
      // We read the title from our component's state.
      title: this.state.newTodoTitle,
      // Setting the completed flag to be false by default.
      completed: false
    }

    // Note: React will only know you've updated the state
    // if there is a difference in the state references,
    // so we should not mutate the state object.
    // That is why we use the this.setState() method for updating our state. You need to put the new todo in the this.state.todos collection.
    console.log('New Todo submitted', newTodo);
  }

  toggleTodoState = id => {
    // In the two rows below we find the clicked todo. We need to flip its completed flag.
    const newTodos = this.state.todos;
    const toggledTodo = newTodos.find(todo => todo.id === id);

    // Flip the completed flag and rewrite it in the this.state.todos array. Use ...newTodos - the spread ES6 operator.
    console.log('This Todo was toggled', toggledTodo);
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

          <input type="submit" />
        </form>

        <div className="todos-container">
          {this.state.todos.map(currentTodo =>
            // Note how we are again passing the toggleTodoState call as a callback rather than invoking the function directly.
            // You need to check ./Todo.js and see how to handle the onClickHandlerThatWeNeedToWrite callback that we are passing.
            <Todo 
              key={currentTodo.id} 
              todo={currentTodo} 
              onClickHandlerThatWeNeedToWrite={ id => this.toggleTodoState(id) }
            />
          )}
        </div>
      </div>
    );
  }
}

export default Exercise_4;
