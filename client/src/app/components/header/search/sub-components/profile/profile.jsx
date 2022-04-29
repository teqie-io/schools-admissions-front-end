import React from 'react'
import Zoom from 'react-reveal/Zoom'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { dashboard, verified, icsettings, icuser } from '../../../../../static/image'

export default function Profile({ visible, onClosed }) {
  return (
    <Zoom duration={300} when={visible}>
      <div className={clsx('profile-box-card', visible ? '' : 'hidden')}>
        <div className='border-b p-4 pl-5'>
          <p className='text-main-black text-base font-semibold leading-4'>Carlota Monteiro</p>
          <p className='text-second-gray text-sm'>emulated@gmail.com</p>
        </div>
        <div className='flex flex-col items-center justify-center mt-4'>
          {dataLinks.map((item, key) => (
            <NavLink onClick={onClosed} key={key} to={item.link} className='profile-box-card_link'>
              <img src={item.img} alt={item.name} className='relative mr-1.5 h-6 w-6' style={{ bottom: 1 }} />
              {item.name}
            </NavLink>
          ))}
          <button
            onClick={onClosed}
            className='flex items-center justify-center font-semibold border rounded-lg w-52 h-9 mt-4'
          >
            Logout
          </button>
        </div>
      </div>
    </Zoom>
  )
}

Profile.propTypes = {
  visible: PropTypes.bool,
  onCLosed: PropTypes.func
}

const dataLinks = [
  { img: dashboard, name: 'Dashboard', link: '/' },
  { img: verified, name: 'Application', link: '/application/application' },
  { img: icsettings, name: 'Settings', link: '/settings/user-settings' },
  { img: icuser, name: 'Admin', link: '/' }
]
