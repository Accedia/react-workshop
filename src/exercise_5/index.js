import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

// Tasks:
//    1. Complete all tasks in the App component
//    1. Complete all tasks in the store.js file

class Exercise_5 extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Exercise_5