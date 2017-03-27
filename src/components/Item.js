import React from 'react'
import {ListGroupItem, FormControl, Button, Glyphicon, FormGroup, InputGroup,
        ButtonToolbar, ButtonGroup, Checkbox} from 'react-bootstrap'

export default class Item extends React.Component{
  constructor(){
    super()
    this.state = {
      hover: false,
      editMode: false,
      doneStyle: {},
      checkStyle: 'default',
      listItemState: '',
      doneCheck: false
    }
  }
  handleMouseEnter = () => {
    this.setState({
      hover: true
    })
  }
  handleMouseLeave = () => {
    this.setState({
      hover: false
    })
  }
  handleRemoveClick = () => {
    this.props.handleRemoveClick(this.props.index)
  }
  handleEditButtonClick = () => {
    this.setState({
      editMode: true
    })
  }
  handleEditClick = (newVal) => {
    this.props.handleUpdate(this.props.index, newVal)
    this.setState({
      editMode: false
    })
  }
  handleDoneClick = () => {
    if(this.state.doneCheck){
      this.setState({
        doneStyle: {
          'text-decoration': 'none'
        },
        checkStyle: 'default',
        listItemState: '',
        doneCheck: false
      })
    } else {
      this.setState({
        doneStyle: {
          'text-decoration': 'line-through'
        },
        checkStyle: 'none',
        listItemState: 'disabled',
        doneCheck: true
      })
    }
  }
  render(){
    let hoverStyle, body
    if(this.state.hover){
      hoverStyle = {
        display: 'inline-block'
      }
    } else {
      hoverStyle = {
        display: 'none'
      }
    }

    if(this.state.editMode){
      body = <EditField val={this.props.children}
                        handleEditClick={this.handleEditClick}/>
      hoverStyle = {
        display: 'none'
      }
    } else {
      body = <div className='itemText' style={this.state.doneStyle}>{this.props.children}</div>
    }
    return(
      <ListGroupItem
          disabled={this.state.listItemState}
          className='item'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          style={this.state.doneStyle}>
        <Options style={hoverStyle} onRemoveClick={this.handleRemoveClick} onEditClick={this.handleEditButtonClick}/>
        <Button bsSize='xs' bsStyle={this.state.checkStyle} onClick={this.handleDoneClick} style={{display: 'inline-block'}}><Glyphicon glyph='ok'></Glyphicon></Button>
        {body}
      </ListGroupItem>
    )
  }
}

class Options extends React.Component{
  render(){
    return(
      <ButtonToolbar className='options' style={this.props.style}>
        <ButtonGroup>
          <Button bsSize='xs' bsStyle='default' onClick={this.props.onRemoveClick}><Glyphicon glyph='remove'/></Button>
          <Button bsSize='xs' bsStyle='default' onClick={this.props.onEditClick}><Glyphicon glyph='pencil'/></Button>
        </ButtonGroup>
      </ButtonToolbar>
    )
  }
}

class EditField extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      editValue: props.val
    }
  }
  handleSubmit = () => {
    this.props.handleEditClick(this.state.editValue)
  }
  updateValue = (evt) => {
    this.setState({
      editValue: evt.target.value
    })
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
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
