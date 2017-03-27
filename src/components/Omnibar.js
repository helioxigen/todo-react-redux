import React from 'react'
import {Button, FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap'

export default class Omnibar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      boxValue: '',
      validation: null
    }
  }
  updateValue = (evt) =>{
    this.setState({
      boxValue: evt.target.value
    })
  }
  handleSubmit = () =>{
    if (this.state.boxValue === ''){
      this.setState({
        validation: 'error'
      })
    } else {
      this.props.handlePlusClick(this.state.boxValue)
      this.setState({
        validation: null,
        boxValue: ''
      })
    }
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <FormGroup validationState={this.state.validation}>
          <InputGroup>
            <FormControl  type='text' value={this.state.boxValue} onChange={this.updateValue}/>
            <InputGroup.Button>
              <Button bsStyle='primary' onClick={this.handleSubmit}><Glyphicon glyph='plus'/></Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    )
  }
}
