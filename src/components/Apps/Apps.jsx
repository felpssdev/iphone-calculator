import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppIcon from '../AppIcon/AppIcon'
import calculatorIcon from './calculator.png'
import phoneIcon from './phone.png'
import './Apps.css'

class Apps extends Component {
  state = {
    apps: [
      {
        name: 'Calculadora',
        path: 'calc',
        imgSrc: calculatorIcon
      },
      {
        name: 'Telefone',
        path: 'phone',
        imgSrc: phoneIcon
      }
    ]
  }

  render() {
    const { apps } = this.state

    return (
      <div className='Apps'>
        {apps.map((app) => (
          <div key={ app.name } className='AppIconName'>
            <Link to={`/${app.path}`}>
              <AppIcon imgSrc={ app.imgSrc }/>
            </Link>
            <p>{ app.name }</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Apps