import React, { Component } from 'react'
import CallButton from '../../components/CallButton/CallButton'
import HomeBar from '../../components/HomeBar/HomeBar'
import Notch from '../../components/Notch/Notch'
import PhoneButton from '../../components/PhoneButton/PhoneButton'
import './Phone.css'

const buttonsOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#']
const lettersOptions = ['', 'A B C', 'D E F', 'G H I', 'J K L', 'M N O', 'P Q R S', 'T U V', 'W X Y Z', '', '+', '']

class Phone extends Component {
  state = {
    result: ''
  }

  handleClick = (num) => {
    const { result } = this.state

    this.setState({
      result: result + num
    })
  }

  handleDelete = () => {
    const { result } = this.state

    this.setState({
      result: result.slice(0, -1)
    })
  }

  render() {
    const { result } = this.state
    return (
      <div className='Phone'>
        <Notch />
        <div className='PhoneResult'>
          <p className='PhoneNumber'>{result}</p>
          {result.length >= 1 ? <p className='AddNumber'>Add Number</p> : null}
        </div>
        <div className='PhoneButtons'>
          {buttonsOptions.map((btn, i) => (
            <PhoneButton
              key={i}
              num={ btn } 
              text={ lettersOptions[i] }
              handleClick={ this.handleClick }
            />))
          }
        </div>
        <div className='CallDelete'>
          <CallButton />
          {result.length >= 1
            ?
            <div className='DeleteSection'>
              <div className='ponta-esquerda'></div><div onClick={ this.handleDelete } className='Delete'>x</div>
            </div>
            : null
          }
        </div>
        <HomeBar />
      </div>
    )
  }
}

export default Phone