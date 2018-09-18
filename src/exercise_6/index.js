import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store';

import Header from './common/Header';
import Home from './pages/Home';
import TodoCreate from './pages/TodoCreate';
import TodoDetails from './pages/TodoDetails';

// Tasks:
//    1. Add a new route for viewing a single todo

class Exercise_6 extends React.Component {
  render() {
    return (
      <Provider store={store}>

        <BrowserRouter>
          <div>
            <Header />

            <Route path='/' exact component={Home} />
            <Route path='/todo-create' component={TodoCreate} />
            {/* <Route ... */}
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Exercise_6