import React from 'react';
import Todo from './Todo';

// Tasks:
//    1. Update the state when a new todo is added.

class Exercise_4 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }

    this.todoTitleInput = React.createRef();

    // Note: Since we are passing callbacks, 
    // and the way javascript's context works
    // we need to bind the function 
    // to the current component's "this".
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(event) {
    event.preventDefault();

    let newTodo = {
      title: this.todoTitleInput.current.value,
      completed: false
    }

    // Note: React will only know you've updated the state
    // if there is a difference in the state references,
    // so we should not mutate the state object.
    // Rather we use .setState and pass it a new array of todos.
    this.setState({ todos: [newTodo, ...this.state.todos] })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        this.setState({ todos });
      })
  }

  render() {
    return (
      <div>
        <h1>Accedia React Workshop</h1>

        <form onSubmit={this.handleSubmit}>
          <input ref={this.todoTitleInput} />
          <input type="submit" />
        </form>

        <div className="todos-container">
          {this.state.todos.map((todo, index) =>
            <Todo todo={todo} key={index} />
          )}
        </div>
      </div>
    )
  }
}

export default Exercise_4