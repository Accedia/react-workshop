import React, { Component } from 'react';
import Post from './Post';

class PostsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=3';

    fetch(url)
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div>
        { this.state.posts.map(currentPost =>
          <Post key={ currentPost.id } post={ currentPost } />
        ) }
      </div>
    );
  }
}

export default PostsList;
