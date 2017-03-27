import React from 'react'
import Item from './Item.js'

export default class Afterbox extends React.Component{
  constructor(props){
    super(props)
  }
  handleRemove = (key) => {
    this.props.handleRemove(key)
  }
  handleUpdate = (key, newVal) => {
    this.props.handleUpdate(key, newVal)
  }
  render(){
    const itemList = this.props.itemList
    return(
      <div>
        <ul>
          {itemList.map((entry, index) => {
            return <Item
                      key={index}
                      index={index}
                      handleRemoveClick={this.handleRemove}
                      handleUpdate={this.handleUpdate}>
                        {entry}
                   </Item>
          })}
        </ul>
      </div>
    )
  }
}
