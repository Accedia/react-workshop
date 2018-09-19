import { createStore } from 'redux'

// Tasks:
//    1. Implement the ADD_TODO case

let defaultState = {
  todos: [],
}

let rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODOS':
      return { ...state, ...{ todos: action.payload } }
    // case 'ADD_TODO':
    //   return ...
    default:
      return state
  }
}

export default createStore(rootReducer)