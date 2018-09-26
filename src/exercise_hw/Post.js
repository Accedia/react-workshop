import React from 'react';
import Comment from './Comment';

export default ({ post : { title, comments, authorName, numberOfLikes } }) => (
    <div>
        <h2>{ title }</h2>

        { comments.map(currentComment =>
          <Comment key={ currentComment } comment={ currentComment } />
        ) }
        
        <h3>{ `${ authorName }, ${ numberOfLikes } likes` }</h3>

        <hr />
    </div>
);
