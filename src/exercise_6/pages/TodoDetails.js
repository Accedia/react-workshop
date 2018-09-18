import React from 'react';
import { connect } from 'react-redux';
import Todo from '../common/Todo';
import { changeCurrentTodo } from '../actionsCreators';

class TodoDetails extends React.Component {
  componentDidMount() {
    let todoId = this.props.match.params.todoId;

    fetch('https://jsonplaceholder.typicode.com/todos/' + todoId)
      .then(response => response.json())
      .then(todo => {
        this.props.changeCurrentTodo(todo);
      })
  }

  componentWillUnmount() {
    this.props.changeCurrentTodo(null);
  }

  render() {
    return (
      <div>
        {this.props.currentTodo && <Todo todo={this.props.currentTodo} />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentTodo: state.currentTodo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeCurrentTodo: todo => dispatch(changeCurrentTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetails)