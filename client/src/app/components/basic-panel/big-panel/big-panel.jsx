import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import { NavLink } from 'react-router-dom'

import { NavBar } from '@components/basic-panel'
import logo from '@image/logo.svg'
import './big-panel.scss'

export default function BigPanel({ admin, setAdmin }) {
  const campusStyle = { position: 'absolute', bottom: 5 }

  return (
    <div className='basic-panel'>
      <Fade left duration={500}>
        <div className='basic-panel-logo'>
          <NavLink to='/' className='flex'>
            <img className='basic-panel-logo_img' src={logo} alt='logo' />
            {admin && <p className='relative top-1.5 text-base font-medium ml-2'>Admin</p>}
          </NavLink>
        </div>
        <div className='basic-panel-menu basic-panel-menu_profile' onClick={() => setAdmin(!admin)}>
          <img
            className='basic-panel-menu_avatar'
            src='https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt=''
          />
          <div className='basic-panel-menu_text'>
            <div className='basic-panel-menu_text-start'>
              <p>Carlota Monteiro</p>
            </div>
            <p className='basic-panel-menu_text-end'>{admin ? 'Admin' : 'User'}</p>
          </div>
        </div>
        <NavBar admin={admin} />
        {admin ? (
          <span />
        ) : (
          <div className='basic-panel-menu basic-panel-menu_campus' style={campusStyle}>
            <img
              className='basic-panel-menu_avatar_campus'
              src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Morgan_Hall_of_Williams_College_in_the_fall_%2827_October_2010%29.jpg'
              alt=''
            />
            <div className='basic-panel-menu_text'>
              <div className='basic-panel-menu_text-start'>
                <p>BIS Galileo Campus</p>
                <div className='basic-panel-menu_triangle' />
              </div>
              <div className='basic-panel-menu_text-end'>
                2020-21 <div className='basic-panel-menu_triangle' />
              </div>
            </div>
          </div>
        )}
      </Fade>
    </div>
  )
}
