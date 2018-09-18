import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

// Tasks:
//    1. Implement the .handleSubmit functionality
//    2. Implement the .addTodo method in mapDispatchToProps

class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();

    let newTodo = {
      title: this.props.todoTitle,
      completed: false
    };

    console.log('New Todo submitted', newTodo);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        this.props.addTodos(todos);
      })
  }

  render() {
    return (
      <div>
        <h1>Accedia React Workshop</h1>

        <form onSubmit={this.handleSubmit}>
          <input value={this.props.todoFormTitle} onChange={event => this.props.updateTodoTitle(event.target.value)} />
          <input type="submit" />
        </form>

        <div className="todos-container">
          {this.props.todos.map((todo, index) =>
            <Todo todo={todo} key={index} />
          )}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    todoTitle: state.todoTitle
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateTodoTitle: todoTitle => dispatch({
      type: 'UPDATE_TODO_TITLE',
      payload: todoTitle
    }),
    addTodos: todos => dispatch({
      type: 'ADD_TODOS',
      payload: todos
    }),
    // addTodo: todo => ...
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)