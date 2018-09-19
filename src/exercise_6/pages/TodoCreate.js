import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actionsCreators'

class TodoCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todoTitle: '' }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let newTodo = {
      title: this.state.todoTitle,
      completed: false
    };

    this.props.addTodo(newTodo);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.todoTitle} onChange={event => this.setState({ todoTitle: event.target.value })} />
        <input type="submit" />
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoCreate)