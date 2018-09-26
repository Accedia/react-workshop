import React from 'react';
import { Link } from 'react-router-dom';

// Again we use the _ character to indicate that we are not using the props.
// Note how each Link component needs a to prop to be provided.
export default _ => (
  <header>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
  </header>
);
