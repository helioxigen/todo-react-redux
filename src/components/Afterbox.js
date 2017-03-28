import React from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'react-bootstrap'

import Item from './Item.js'


class Afterbox extends React.Component{
  render(){
    const itemList = this.props.items
    return(
      <div>
        <ListGroup>
          {itemList.map( item => (
            <Item key={item.get('id')}
                  index={item.get('id')}
                  checked={item.get('checked')}
                  editMode={item.get('editMode')}>
              {item.get('text')}
            </Item>
          ))}
        </ListGroup>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    items: state
  }
}

export default connect(mapStateToProps)(Afterbox)
