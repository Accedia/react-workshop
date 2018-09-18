export const addTodos = todos => ({ type: 'ADD_TODOS', payload: todos })

export const addTodo = todo => ({ type: 'ADD_TODO', payload: todo })

export const updateTodoTitle = todoTitle => ({ type: 'UPDATE_TODO_TITLE', payload: todoTitle })

export const changeCurrentTodo = todo => ({ type: 'CHANGE_CURRENT_TODO', payload: todo })