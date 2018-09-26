// Tasks:
//    1. Go to the /about route by clicking on the site's navigation bar. Notice how both the Home and About components are rendered.
//    That should be fixed by using the exact prop for some of the Routes that are defined below.
//    2. Finish the third application route - the /todo-details one. It should parse the todo's id from the url, remember the :variable syntax.
//    3. Finish the tasks in the ./pages/TodoDetails.js file.
//    4. Have a look at all the files for the current exercise. Read the comments.

import React from 'react';
// We use the as keyword in order to give an alias.
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './common/Header';
import Home from './pages/Home';
import About from './pages/About';
import TodoDetails from './pages/TodoDetails';

// Sometimes the _ character is used to indicate that we are not using any of the incoming props.
// It is a valid variable name though. Also note that we are using a functional(stateless) component.
const Exercise_5 = _ => (
  <Router>
    <div>
      {/* This is the static site header with navigation links. */}
      <Header />

      <Route path='/' exact component={ Home } />
      <Route path='/about' component={ About } />
      <Route path='/todo-details/#REPLACE_THIS#' component={ null } />
    </div>
  </Router>
);

export default Exercise_5;
