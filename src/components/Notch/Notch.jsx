import React, { Component } from 'react'
import './Notch.css'

class Notch extends Component {
  state = {
    hour: '00:00'
  }

  componentDidMount() {
    setInterval(this.hourChange, 1000)
  }

  hourChange = () => {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()

    if (minutes < 10) {
      this.setState({
        hour: `${hours}:0${minutes}`
      })
    } else {
      this.setState({
        hour: `${hours}:${minutes}`
      })
    }
  }

  render() {
    const { hour } = this.state
    return (
      <div className='TopMenu'>
        <div className='Hour'>
          <p>{ hour }</p>
        </div>
        <div className='Notch'>
          <div className='Speaker'></div>
          <div className='Camera'></div>
        </div>
        <div className='SignalInfo'>
          <p>Teste</p>
        </div>
      </div>
    )
  }
}

export default Notch