/* eslint-disable default-case */
import React, { Component } from 'react'
import './Button.css'

class Button extends Component {
  state = {
    backgroundColor: '#636366',
    width: '33px',
    color: 'white',
    radius: '50%'
  }

  componentDidMount() {
    this.changeColor()
  }

  changeColor = () => {
    const { text } = this.props
    switch(text) {
      case '=':
      case '+':
      case '/':
      case 'x':
      case '-': {
        this.setState({
          backgroundColor: '#FF9500'
        })
        break
      }
      case 'AC':
      case '+/-':
      case '%': {
        this.setState({
          backgroundColor: '#D1D1D6',
          color: 'black'
        })
        break
      }
      case '0': {
        this.setState({
          width: '80px',
          radius: '25px'
        })
        break
      }
    }
  }

  render() {
    const { text, buttonClick } = this.props
    const { backgroundColor, color, width, radius } = this.state

    return (
      <div
        onClick={ buttonClick }
        style={{backgroundColor: backgroundColor, color: color, width: width, borderRadius: radius}}
        className='Button'>
          {text}
        </div>
    )
  }
}

export default Button