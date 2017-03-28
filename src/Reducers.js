import {ADD_TODO, EDIT_TODO, TOGGLE_TODO, REMOVE_TODO, UPDATE_TODO} from './Actions'
import { Map, List } from 'immutable'
import uuid from 'uuid'


const initialState = List([])

export default function todoApp(itemList = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return itemList.push(Map({
        id: uuid.v4(),
        checked: false,
        text: action.text
      }))
    case UPDATE_TODO:
      return itemList.map( item => {
        if (item.get('id') === action.id){
          return item.merge({
            text: action.text,
            editMode: false
          })
        } else {
          return item
        }
      })
    case EDIT_TODO:
      return itemList.map( item => {
        if (item.get('id') === action.id){
          return item.update('editMode', val => !val)
        } else {
          return item
        }
      })
    case TOGGLE_TODO:
      return itemList.map( item => {
        if (item.get('id') === action.id){
          return item.update('checked', val => !val)
        } else {
          return item
        }
      })
    case REMOVE_TODO:
      return itemList.filter(item => item.get('id') !== action.id)
    default:
      return initialState

  }
}
