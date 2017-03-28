import React from 'react'
import { connect } from 'react-redux'

import { PageHeader } from 'react-bootstrap'

import Omnibar from './components/Omnibar'
import Afterbox from './components/Afterbox'
import './app.css'

class App extends React.Component{
  render(){
    return(
      <div className='inner-body'>
        <PageHeader>TODO</PageHeader>
        <Omnibar/>
        <Afterbox/>
      </div>
    )
  }
}

export default connect()(App)
