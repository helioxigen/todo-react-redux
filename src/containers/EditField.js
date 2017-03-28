import React from 'react'
import { connect } from 'react-redux'
import { FormControl, Button, Glyphicon, FormGroup, InputGroup } from 'react-bootstrap'

import { updateTodo } from '../Actions'

class EditField extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      editValue: props.val
    }
  }
  updateValue = (evt) => {
    this.setState({
      editValue: evt.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateTodo(this.props.index, this.state.editValue)
  }
  render(){
    return(
      <form className='editfield' onSubmit={this.handleSubmit}>
        <FormGroup>
          <InputGroup>
            <FormControl type='text' defaultValue={this.state.editValue} onChange={this.updateValue}/>
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
