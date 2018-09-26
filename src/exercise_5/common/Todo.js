import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  const { title, completed, id } = props.todo;
  // The url for the details Link is constructed below.
  const detailsPath = `/todo-details/${ id }`;

  return (
    <div className='todo'>
      <div>Title: { title }</div>
      <span onClick={ () => props.onClickHandlerThatWeNeedToWrite(id) }>{ completed ? 'V' : 'X' }</span>

      <br/>

      {/* We are checking if the todo's id is in [1, 5] and provide the link only then since those are valid API ids. */}
      {/* Note how the && operator is used in order to force an evaluation of the second argument once the first is truthy. */}
      { (id >= 1 && id <= 5) && <Link to={ detailsPath }>Details</Link> }
    </div>
  );
};
