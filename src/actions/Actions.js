export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export function addTodo(text) {
  return {type: ADD_TODO, text}
}

export function editTodo(index, text){
  return {type: EDIT_TODO, index, text}
}

export function toggleTodo(index) {
  return {type: TOGGLE_TODO, index}
}

export function removeTodo(index) {
  return {type: REMOVE_TODO, index}
}
