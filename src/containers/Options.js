import React from 'react'
import { connect } from 'react-redux'
import {removeTodo, editTodo} from '../Actions'
import {ButtonToolbar, Button, ButtonGroup, Glyphicon} from 'react-bootstrap'

class Options extends React.Component{
  onRemoveClick = () =>{
    this.props.removeTodo(this.props.index)
  }
  onEditClick = () => {
    this.props.editTodo(this.props.index)
  }
  render(){
    return(
      <ButtonToolbar className='options'>
        <ButtonGroup vertical>
          <Button bsSize='xs' bsStyle='default' onClick={this.onRemoveClick}><Glyphicon glyph='remove'/></Button>
          <Button bsSize='xs' bsStyle='default' onClick={this.onEditClick}><Glyphicon glyph='pencil'/></Button>
        </ButtonGroup>
      </ButtonToolbar>
    )
  }
}

function mapDispatchToProps(dispatch){
  return{
    removeTodo: id => dispatch(removeTodo(id)),
    editTodo: id => dispatch(editTodo(id)),
  }
}

export default connect(null, mapDispatchToProps)(Options)
