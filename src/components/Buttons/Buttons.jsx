import React, { Component } from 'react'
import './Buttons.css'
import Button from '../Button/Button'

class Buttons extends Component {
  render() {
    const { buttonClick, buttonsOptions } = this.props

    return (
      <div className='Buttons'>
        {buttonsOptions.map(button => (
          <Button buttonClick={ buttonClick } key={ button } text={ button }/>
        ))}
      </div>
    )
  }
}

export default Buttons