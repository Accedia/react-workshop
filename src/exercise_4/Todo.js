// Tasks: 
//    1. Wire up the onClick event handler(line 26) with the callback that is received via props from the parent component.

import React from 'react';

const renderTitle = title => {
  // Note that we are using a common remote data handling pattern here.
  // If the data has not arrived yet, we return nothing, once it is here, we return the suitable content.
  if (title === undefined) return;

  return <div>Title: { title }</div>;
}

const renderStatus = status => {
  // Once again, we see the same pattern from the renderTitle method.
  if (status === undefined) return;

  return <span>{ status ? 'V' : 'X' }</span>;
}

const Todo = props => {
  // Hint - you will need to use something from the props for the callback on line 11.
  const { title, completed } = props.todo;

  return (
    <div className='todo' onClick={ () => null }>
      { renderTitle(title) }
      { renderStatus(completed) }
    </div>
  );
}

export default Todo;
