// Tasks:
//    1. Add this heading tag(<h1>Accedia Workshops - ReactJS</h1>) to the top of the page.
//    2. Add this tag with some conditional logic(<span>{ #REPLACE_THIS# ? 'YAY, you won!' : 'NAY, you lost!' }</span>) in the render method.

import React, { Component } from 'react';

class Exercise_1 extends Component {
  // A class level method that returns a random boolean value with rougly 50-50 chance.
  conditionalMethod() {
    // Math.random() returns a random number between 0 and 1.
    return Math.random() >= 0.5;
  }

  // Note: The render method expects us to return a single component(object).
  // If you wish to add more than one tag, wrap them in a div.
  render() {
    return (
      <p>Hello world!</p>
    );
  }
}

export default Exercise_1;
