import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomeBar.css'

class HomeBar extends Component {
  render() {
    return (
        <div className='HomebarContainer'>
          <Link to={'/'} >
            <div className='Homebar' />
          </Link>
        </div>
    )
  }
}

export default HomeBar