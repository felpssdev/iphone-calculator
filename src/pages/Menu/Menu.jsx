import React, { Component } from 'react'
import Apps from '../../components/Apps/Apps'
import MainApps from '../../components/MainApps/MainApps'
import Notch from '../../components/Notch/Notch'
import SwitchMenu from '../../components/SwitchMenu/SwitchMenu'
import backgroundImg1 from './img/backg1.jpg'
import './Menu.css'

class Menu extends Component {
  state = {
    backgroundImage: backgroundImg1
  }

  render() {
    const { backgroundImage } = this.state
    return (
      <div className='Menu' style={{ backgroundImage: `url(${backgroundImage})`}}>
        <Notch />
        <Apps />
        <SwitchMenu />
        <MainApps />
      </div>
    )
  }
}

export default Menu