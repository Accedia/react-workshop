import React, { Component } from 'react';
import Comment from './Comment';
import Input from './Input';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    const url = `https://jsonplaceholder.typicode.com/posts/${ this.props.post.id }/comments?_limit=4`;

    fetch(url)
      .then(response => response.json())
      .then(comments => {
        this.setState({ comments });
      });
  }

  render() {
    const { title } = this.props.post;
    const { comments } = this.state;

    return (
      <div>
        <h2>{ title }</h2>
    
        { comments.map(({ id, body }) =>
          <Comment key={ id } comment={ body } />
        ) }

        <Input onAdd={ newComment => this.setState({ comments: [ ...this.state.comments, newComment ] }) } />
        
        <hr />
      </div>
    );
  }
}

export default Post;
