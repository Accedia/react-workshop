import { createStore } from 'redux'

// Tasks:
//    1. Implement the ADD_TODO case

let defaultState = {
  todos: [],
  todoTitle: '',
}

let rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_TODO_TITLE':
      return Object.assign({}, state, { todoTitle: action.payload })
    case 'ADD_TODOS':
      return Object.assign({}, state, { todos: action.payload })
    // case 'ADD_TODO':
    //   return ...
    default:
      return state
  }
}

export default createStore(rootReducer)