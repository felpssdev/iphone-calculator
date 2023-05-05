import React, { Component } from 'react'
import './PhoneButton.css'

class PhoneButton extends Component {
  render() {
    const { num, text, handleClick } = this.props
    return (
      <div onClick={ () => handleClick(num)} className='PhoneButton'>
        <p className='PhoneButtonNumber'>{num}</p>
        <p className='PhoneButtonText'>{text}</p>
      </div>
    )
  }
}

export default PhoneButton