import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppIcon from '../AppIcon/AppIcon'
import calculatorImg from '../Apps/calculator.png'
import phoneIcon from '../Apps/phone.png'
import './MainApps.css'

class MainApps extends Component {
  state = {
    apps: [
      {
        path: 'calc',
        imgSrc: calculatorImg
      },
      {
        path: 'phone',
        imgSrc: phoneIcon
      }
    ]
  }

  render() {
    const { apps } = this.state
    return (
      <div className='MainApps'>
        {apps.map((app) =>
        <Link key={app.path} to={`/${app.path}`}>
          <AppIcon imgSrc={ app.imgSrc }/>
        </Link>
        )}
      </div>
    )
  }
}

export default MainApps