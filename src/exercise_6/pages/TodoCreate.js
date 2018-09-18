import React from 'react'
import { connect } from 'react-redux'

import { addTodo, updateTodoTitle } from '../actionsCreators'

class TodoCreate extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let newTodo = {
      title: this.props.todoTitle,
      completed: false
    };

    this.props.addTodo(newTodo);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.props.todoTitle} onChange={event => this.props.updateTodoTitle(event.target.value)} />
        <input type="submit" />
      </form>
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
    addTodo: todo => dispatch(addTodo(todo)),
    updateTodoTitle: todoTitle => dispatch(updateTodoTitle(todoTitle)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoCreate)