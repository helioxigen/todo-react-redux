import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { ListGroupItem, Button, Glyphicon } from 'react-bootstrap'

import Options from '../containers/Options'
import EditField from '../containers/EditField'

import {updateTodo, toggleTodo} from '../Actions'

class Item extends React.Component{
  handleEditClick = (newVal) => {
    this.props.updateTodo(this.props.index, newVal)
  }
  handleCheckClick = () => {
    this.props.toggleTodo(this.props.index)
  }
  render(){
    let editMode = this.props.editMode
    let checked = this.props.checked

    return(
      <ListGroupItem
          disabled={checked ? 'disabled' : ''}
          className={classNames('item', {'edit-mode': editMode}, {'checked': checked})}>
        <Options index={this.props.index} />
        <Button bsSize='xs'
                className='check'
                active={checked}
                onClick={this.handleCheckClick}>
            <Glyphicon glyph='ok'></Glyphicon>
        </Button>
        <EditField index={this.props.index}
                   val={this.props.children}/>
        <div className='itemText'>{this.props.children}</div>
      </ListGroupItem>
    )
  }
}


function mapDispatchToProps(dispatch){
  return {
    toggleTodo: id => dispatch(toggleTodo(id)),
    updateTodo: (id, text) => dispatch(updateTodo(id, text))
  }
}

export default connect(null, mapDispatchToProps)(Item)
