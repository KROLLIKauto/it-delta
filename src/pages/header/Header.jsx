import React from 'react'
import headerBanner from '../../images/Banner-image.png'
import headerAvatar from '../../images/Avatar-profile.png'
import iconMail from '../../images/Mail.png'
import iconPhone from '../../images/Phone.png'

import './header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-image'><img src={headerBanner} /></div>
      <div className='header-info'>
        <div className='header-info-user'>
          <div className='header-info-user-avatar'><img src={headerAvatar} /></div>
          <div className='header-info-user-name'>Ricardo Cooper</div>
        </div>
        <div className='header-info-action'>
          <div className='header-info-action-message'>
            <div className='header-info-action-message-icon'><img src={iconMail} /></div>
            <div className='header-info-action-message-text'>Message</div>
          </div>
          <div className='header-info-action-call'>
            <div className='header-info-action-call-icon'><img src={iconPhone} /></div>
            <div className='header-info-action-call-text'>Call</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
