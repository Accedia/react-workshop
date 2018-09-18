import { createStore } from 'redux'

let defaultState = {
  todos: [],
  todoTitle: '',
  currentTodo: null
}

let rootReducer = (state = defaultState, action) => {
  console.log(action)
  switch (action.type) {
    case 'UPDATE_TODO_TITLE':
      return Object.assign({}, state, { todoTitle: action.payload })
    case 'ADD_TODOS':
      return Object.assign({}, state, { todos: action.payload })
    case 'ADD_TODO':
      return Object.assign({}, state, { todos: [action.payload, ...state.todos] })
    case 'CHANGE_CURRENT_TODO':
      return Object.assign({}, state, { currentTodo: action.payload })
    default:
      return state
  }
}

let store = createStore(rootReducer)

export default store