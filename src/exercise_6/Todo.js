import React from 'react';

const renderTitle = title => {
  if (title === undefined) return;

  return <div>Title: { title }</div>;
}

const renderStatus = status => {
  if (status === undefined) return;

  return <span>{ status ? 'V' : 'X' }</span>;
}

const Todo = props => {
  const { title, completed, id } = props.todo;

  return (
    <div className='todo' onClick={ () => props.onClickHandlerThatWeNeedToWrite(id) }>
      { renderTitle(title) }
      { renderStatus(completed) }
    </div>
  );
}

export default Todo;
