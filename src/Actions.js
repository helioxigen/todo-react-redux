export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export function addTodo(text) {
  return {type: ADD_TODO, text}
}

export function editTodo(id){
  return {type: EDIT_TODO, id}
}

export function updateTodo(id, text){
  return {type: UPDATE_TODO, id, text}
}

export function toggleTodo(id) {
  return {type: TOGGLE_TODO, id}
}

export function removeTodo(id) {
  return {type: REMOVE_TODO, id}
}
