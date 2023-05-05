/* eslint-disable default-case */
import React, { Component } from 'react'
import './Calculator.css'
import './Screen/Screen.css'
import Buttons from '../../components/Buttons/Buttons.jsx'
import Notch from '../../components/Notch/Notch'
import HomeBar from '../../components/HomeBar/HomeBar'

const buttonsOptions = ['AC', '+/-', '%', '/', '7', '8' , '9', 'x', '4', '5', '6', '-' , '1', '2', '3', '+', '0', ',', '=']

class Calculator extends Component {
  state = {
    number: '0',
    firstNumber: '0',
    isOperating: false,
    operationType: '',
  }

  operations = (key) => {
    const { number, firstNumber } = this.state

    switch(key) {
      case '+': {
        if (firstNumber !== '0') {
          this.setState({
            number: Number(firstNumber) + Number(number),
          })
        } else {
          this.setState({
            firstNumber: number,
            isOperating: true,
            operationType: 'sum',
          })
        }
        break
      }
      case '-': {
        if (firstNumber !== '0') {
          this.setState({
            number: Number(firstNumber) - Number(number),
          })
        } else {
          this.setState({
            firstNumber: number,
            isOperating: true,
            operationType: 'sub',
          })
        }
        break
      }
      case 'x': {
        if (firstNumber !== '0') {
          this.setState({
            number: Number(firstNumber) * Number(number),
          })
        } else {
          this.setState({
            firstNumber: number,
            isOperating: true,
            operationType: 'mult',
          })
        }
        break
      }
      case '/': {
        if (firstNumber !== '0') {
          this.setState({
            number: Number(firstNumber) / Number(number),
          })
        } else {
          this.setState({
            firstNumber: number,
            isOperating: true,
            operationType: 'div',
          })
        }
        break
      }
    }
  }

  displayResult = () => {
    const { number, firstNumber, operationType } = this.state

    switch(operationType) {
      case 'sum': {
        this.setState({
          number: Number(firstNumber) + Number(number),
          isOperating: false,
          operationType: '',
        })
        break
      }
      case 'div': {
        this.setState({
          number: Number(firstNumber) / Number(number),
          isOperating: false,
          operationType: '',
        })
        break
      }
      case 'mult': {
        this.setState({
          number: Number(firstNumber) * Number(number),
          isOperating: false,
          operationType: '',
        })
        break
      }
      case 'sub': {
        this.setState({
          number: Number(firstNumber) - Number(number),
          isOperating: false,
          operationType: '',
        })
        break
      }
    }
  }

  togglePositive = () => {
    const { number } = this.state

    if (Number(number) > 0) {
      this.setState({ number: -Number(number) })
    } else {
      this.setState({ number: Math.abs(Number(number)) })
    }
  }

  divBy100 = () => {
    const { number } = this.state

    this.setState({ number: Number(number) / 100})
  }

  addComma = () => {
    const { number } = this.state

    if (!JSON.stringify(number).includes('.')) {
      this.setState({ number: number + '.'})
    }
  }

  buttonClick = (event) => {
    if (!isNaN(Number(event.target.innerText))) {
      this.setState((prevState) => {
        if (prevState.number !== '0' && !prevState.isOperating) {
          return { number: prevState.number + event.target.innerText }
        } else {
          return { number: event.target.innerText }
        }
      })
    } else if (event.target.innerText === 'AC') {
      this.setState({ number: '0', firstNumber: '0', isOperating: false })
    } else if (event.target.innerText === '/' || event.target.innerText === 'x' || event.target.innerText === '+' || event.target.innerText === '-') {
      this.operations(event.target.innerText)
    } else if (event.target.innerText === '=') {
      this.displayResult()
    } else if (event.target.innerText === '+/-') {
      this.togglePositive()
    } else if (event.target.innerText === '%') {
      this.divBy100()
    } else if (event.target.innerText === ',') {
      this.addComma()
    }
  }

  render() {
    const { number } = this.state
    
    return (
      <div className='calculator'>
        <Notch />
        <div className='Screen'>
          <h1 className='Result'>{ number }</h1>
        </div>
        <Buttons buttonsOptions={ buttonsOptions } buttonClick={ this.buttonClick }/>
        <HomeBar />
      </div>
    )
  }
}

export default Calculator