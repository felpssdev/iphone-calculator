import React, { Component } from 'react'
import './Notch.css'

class Notch extends Component {
  render() {
    return (
      <div className='Notch'>
        <div className='Speaker'></div>
        <div className='Camera'></div>
      </div>
    )
  }
}

export default Notch