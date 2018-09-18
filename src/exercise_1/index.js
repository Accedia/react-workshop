import React from 'react';

// Tasks:
//    1. Add a heading tag to the page.
//    2. Add conditional logic for what to render.

class Exercise_1 extends React.Component {

  // returns a random boolean
  conditionMethod() {
    return Math.random() >= 0.5;
  }

  // Note: The render method expects us to return one root component.
  // If you wish to add more than one tag, wrap them in a div.
  render() {
    return (
      <div>Hello world</div>

      // Hint: Adding curly brackets evaluates the 
      // expression inside and we are able to do things like this:
      // { condition ? <div>...</div> : <span>...</span> }
    )
  }
}

export default Exercise_1