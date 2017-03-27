import React from 'react'

export default class Item extends React.Component{
  constructor(){
    super()
    this.state = {
      hover: false,
      editMode: false,
      doneStyle: {}
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
    this.setState({
      doneStyle: {
        'text-decoration': 'line-through'
      }
    })
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
      body = this.props.children
    }
    return(
      <li className='item'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          style={this.state.doneStyle}>
        {body}
      <input style={hoverStyle}
               onClick={this.handleRemoveClick}
               type='button'
               value='x'/>
      <input style={hoverStyle}
             onClick={this.handleEditButtonClick}
             type='button'
             value='e'/>
           <input style={hoverStyle}
             onClick={this.handleDoneClick}
             type='button'
             value='V'/>
      </li>
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
  handleEditClick = () => {
    this.props.handleEditClick(this.state.editValue)
  }
  updateValue = (evt) => {
    this.setState({
      editValue: evt.target.value
    })
  }
  render(){
    return(
      <div>
        <input defaultValue={this.props.val} onChange={this.updateValue}/>
        <input type='button' onClick={this.handleEditClick} value='V'/>
      </div>
    )
  }
}
