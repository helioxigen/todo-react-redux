import React from 'react';
import Omnibar from './components/Omnibar'
import Afterbox from './components/Afterbox'
import {PageHeader} from 'react-bootstrap'
import './app.css'

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      items: []
    }
  }
  addItem = (value) => {
    const curItems = this.state.items
    curItems.push(value);
    this.setState({
      items: curItems
    })
  }
  handleRemove = (key) => {
    const curItems = this.state.items
    curItems.splice(key,1)
    this.setState({
      items: curItems
    })
  }
  handleUpdate = (key, newVal) => {
    const curItems = this.state.items
    curItems.splice(key,1,newVal)
    this.setState({
      items: curItems
    })
  }
  render(){
    return(
      <div className='inner-body'>
        <PageHeader>TODO_BLAT</PageHeader>
        <Omnibar handlePlusClick={this.addItem}/>
        <Afterbox itemList={this.state.items}
                  handleRemove={this.handleRemove}
                  handleUpdate={this.handleUpdate}/>
      </div>
    )
  }
}
