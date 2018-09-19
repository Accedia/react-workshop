import React from 'react';
import Todo from '../common/Todo';

class TodoDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todo: null }
  }

  componentDidMount() {
    // Note: Any paramether matched by the router 
    // will be available in this.props
    console.log(this.props)

    let todoId; // = this.props...

    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then(response => response.json())
      .then(todo => {
        if (todo && Object.keys(todo).length > 0) {
          this.setState({ todo })
        } else {
          console.log('Api returned an empty todo. You most probably called it with todoId = undefined.')
        }
      })
  }

  render() {
    return (
      <div>
        {this.state.todo && <Todo todo={this.state.todo} />}
      </div>
    )
  }
}

export default TodoDetails