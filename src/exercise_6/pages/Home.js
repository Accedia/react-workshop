import React from 'react';
import Todo from '../common/Todo';
import { connect } from 'react-redux';

import { addTodos } from '../actionsCreators';

class Home extends React.Component {
  componentDidMount() {
    if (typeof this.props.todos === 'object' && this.props.todos.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(todos => {
          this.props.addTodos(todos);
        })
    }
  }

  render() {
    return (
      <div>
        <h1>Accedia React Workshop</h1>

        <div className="todos-container">
          {this.props.todos.map(todo =>
            <Todo todo={todo} key={todo.id} />
          )}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodos: todos => dispatch(addTodos(todos))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)