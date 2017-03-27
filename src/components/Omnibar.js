import React from 'react';

export default class Omnibar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      boxValue: ''
    }
  }
  updateValue = (evt) =>{
    this.setState({
      boxValue: evt.target.value
    })
  }
  handlePlusClick = () =>{
    this.props.handlePlusClick(this.state.boxValue)
  }
  render(){
    return(
      <div>
        <input value={this.state.boxValue} onChange={this.updateValue}/>
        <input type='button' onClick={this.handlePlusClick} value='+'/>
      </div>
    )
  }
}
