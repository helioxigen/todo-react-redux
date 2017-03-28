import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../Actions'
import { Button, FormGroup, InputGroup, Glyphicon } from 'react-bootstrap'

class Omnibar extends React.Component{
  handleSubmit = (e) =>{
    e.preventDefault()
    let value = this.refs.omInput.value
    if (value !== ''){
      this.props.addTodo(value)
    }
  }
  render(){
    return(
      <form className='omnibar' onSubmit={this.handleSubmit}>
        <FormGroup >
          <InputGroup>
            <input type='text' className='form-control' ref='omInput'/>
            <InputGroup.Button>
              <Button bsStyle='primary' onClick={this.handleSubmit}><Glyphicon glyph='plus'/></Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    addTodo: text => dispatch(addTodo(text))
  }
}

export default connect(null, mapDispatchToProps)(Omnibar)
