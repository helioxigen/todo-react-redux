import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {addTodo} from '../Actions'
import {Button, FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap'

class Omnibar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      boxValue: '',
      validation: true
    }
  }
  updateValue = (evt) =>{
    this.setState({
      boxValue: evt.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    if (this.state.boxValue === ''){
      this.setState({
        validation: false
      })
    } else {
      this.props.addTodo(this.state.boxValue)
      this.setState({
        boxValue: '',
        validation: true
      })
    }
  }
  render(){

    return(
      <form className='omnibar' onSubmit={this.handleSubmit}>
        <FormGroup validationState={this.state.validation ? null : 'error'}>
          <InputGroup>
            <FormControl type='text' value={this.state.boxValue} onChange={this.updateValue}/>
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
    addTodo: bindActionCreators(addTodo, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Omnibar)
