import React, { Component } from 'react'
import './AppIcon.css'

class AppIcon extends Component {
  render() {
    const { imgSrc } = this.props

    return (
      <div style={{ backgroundImage: `url(${imgSrc})`}} className='AppIcon'></div>
    )
  }
}

export default AppIcon