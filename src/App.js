import React from 'react';
import Omnibar from './components/Omnibar'
import Afterbox from './components/Afterbox'
import {Jumbotron, Modal} from 'react-bootstrap'
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
      <Jumbotron>
        <div className='static-modal'>
          <Modal.Dialog>
            <Modal.Header>
              <Omnibar className="omnibar" handlePlusClick={this.addItem}/>
            </Modal.Header>
            <Modal.Body>
              <Afterbox itemList={this.state.items}
                        handleRemove={this.handleRemove}
                        handleUpdate={this.handleUpdate}/>
            </Modal.Body>
          </Modal.Dialog>
        </div>
      </Jumbotron>
    )
  }
}
