import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };
  }

  onSubmit = event => {
    event.preventDefault();

    this.props.onAdd({ body: this.state.comment, id: Date.now() });

    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <input 
          value={ this.state.comment } 
          onChange={ event => this.setState({ comment: event.target.value }) } 
        />
      </form>
    );
  }
}

export default Input;
