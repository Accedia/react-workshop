import { createStore } from 'redux'

let defaultState = {
  todos: []
}

let rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODOS':
      return { ...state, ...{ todos: action.payload } }
    case 'ADD_TODO':
      return { ...state, ...{ todos: [action.payload, ...state.todos] } }
    default:
      return state
  }
}

let store = createStore(rootReducer)

export default store