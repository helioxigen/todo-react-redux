import React from 'react'
import { connect } from 'react-redux'
import { Button, Glyphicon, FormGroup, InputGroup } from 'react-bootstrap'

import { updateTodo } from '../Actions'

class EditField extends React.Component{
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateTodo(this.props.index, this.refs.efInput.value)
  }
  render(){
    return(
      <form className='editfield' onSubmit={this.handleSubmit}>
        <FormGroup>
          <InputGroup>
            <input type='text' className='form-control' ref='efInput'/>
            <InputGroup.Button>
              <Button bsStyle='success' onClick={this.handleSubmit}><Glyphicon glyph='ok'/></Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return{
    updateTodo: (id, val) => dispatch(updateTodo(id, val))
  }
}

export default connect(null, mapDispatchToProps)(EditField)
