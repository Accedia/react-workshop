import React, { Component } from 'react';
import Todo from '../common/Todo';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTodoTitle: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        this.setState({ todos });
      });
  }

  handleSubmit = event => {
    event.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: this.state.newTodoTitle,
      completed: false
    };

    this.setState({ todos: [ newTodo, ...this.state.todos ]});
  }

  toggleTodoState = id => {
    const newTodos = this.state.todos;
    const toggledTodo = newTodos.find(todo => todo.id === id);

    toggledTodo.completed = !toggledTodo.completed;

    this.setState({ todos: [ ...newTodos ] });
  }

  render() {
    return (
      <div>
        <h1>Accedia Workshops - ReactJS</h1>

        <form onSubmit={ this.handleSubmit }>
          <input 
            value={ this.state.newTodoTitle } 
            onChange={ event => this.setState({ newTodoTitle: event.target.value }) } 
          />

          <input type="submit" />
        </form>

        <div className="todos-container">
          {this.state.todos.map(currentTodo =>
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

export default Home;
