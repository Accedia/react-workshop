// Tasks:
//    1. Finish the componentDidMount method implementation(from line 14).

import React, { Component } from 'react';

class TodoDetails extends Component {
  constructor(props) {
    super(props);

    // Commonly we declare the objects that will be used later on as empty in the constructor.
    this.state = { todo: {} };
  }

  componentDidMount() {
    // You need to get the matched id from the url that was previously declared in the ../index.js file.
    const id = null;
    // Here is the full url that we need to fetch data from.
    const urlToFetchFrom = `https://jsonplaceholder.typicode.com/todos/${ id }`;

    // Finish the data fetching process for the current todo.
  }

  renderTitle = title => {
    // Note that we are using a common remote data handling pattern here.
    // If the data has not arrived yet, we return nothing, once it is here, we return the suitable content.
    if (!title) return;

    return <h2>Todo's title is: { title }</h2>;
  }

  renderStatus = status => {
    // Once again, we see the same pattern from the renderTitle method.
    if (!status) return;

    return <h3>Todo's status is: { status ? 'completed' : 'pending' }</h3>;
  }

  render() {
    const { completed, title } = this.state.todo;

    return (
      <div>
        { this.renderTitle(title) }
        { this.renderStatus(completed) }
      </div>
    )
  }
}

export default TodoDetails;
