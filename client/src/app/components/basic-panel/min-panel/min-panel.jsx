import React from 'react'
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import clsx from 'clsx'

import { MinNavBar } from '@components/basic-panel'
import logo from '@image/logo.svg'
import './min-panel.scss'

export default function MinPanel({ admin, setAdmin }) {
  return (
    <div className='panel-min'>
      <Fade left duration={500}>
        <div className={clsx('panel-min-logo', admin && 'mt-3')}>
          <NavLink to='/'>
            <img className='panel-min-logo_img' src={logo} alt='logo' />
            {admin && <p className='relative  text-base font-medium ml-2'>Admin</p>}
          </NavLink>
        </div>
        <div className='panel-min-menu panel-min-menu_profile' onClick={() => setAdmin(!admin)}>
          <img
            className='panel-min-menu_avatar'
            src='https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt=''
          />
        </div>
        <MinNavBar admin={admin} />
        {admin ? (
          <span />
        ) : (
          <div className='panel-min-menu panel-min-menu_campus'>
            <img
              className='panel-min-menu_avatar_campus'
              src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Morgan_Hall_of_Williams_College_in_the_fall_%2827_October_2010%29.jpg'
              alt=''
            />
          </div>
        )}
      </Fade>
    </div>
  )
}
