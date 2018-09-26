// Tasks:
//    1. Finish the componentDidMount method implementation.

import React, { Component } from 'react';
import Todo from './Todo';

class Exercise_5 extends Component {
  constructor(props) {
    super(props);

    // Here we initialize the todos's empty array which we will later fill from the API call.
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    // Here is the full url that we need to fetch data from.
    const urlToFetchFrom = 'https://jsonplaceholder.typicode.com/todos?_limit=5';

    // Fetch is a built in XHR(AJAX) client with a Promise based API - basically we send a get request.
    // We use a sample public API that returns mock data.
    fetch(urlToFetchFrom)
      // We make sure that the response is in JSON data format prior to using the data.
      // You need to cast the response to json by using the .json() method and return the result.
      .then(response => null)
      // We now set this.state.todos to be the API's response.
      // We use the setState({}) syntax in order to comply with React's immutability recommendations.
      .then(todos => {
        console.log('The fetched todos are:', todos);
      });
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

export default Exercise_5;
