import React, { Component } from 'react'
import './Buttons.css'
import Button from '../Button/Button'

const buttonsOptions = ['AC', '+/-', '%', '/', '7', '8' , '9', 'x', '4', '5', '6', '-' , '1', '2', '3', '+', '0', ',', '=']

class Buttons extends Component {
  render() {
    const { buttonClick } = this.props

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