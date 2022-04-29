import React, { useState } from 'react'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Profile, Notification, NavApp, Options } from './sub-components'
import { icsearch, layers } from '../../../static/image'
import './search.scss'

export default function Search({ burger }) {
  const [visible, setVisible] = useState({
    profile: false,
    notification: false,
    navapp: false,
    options: false
  })

  const history = useHistory()

  return (
    <div className={clsx('header-search', burger ? 'header-search-max' : 'header-search-min')}>
      <div className='header-search-input'>
        <img className='header-search-input_img' src={icsearch} alt='search' />
        <input className='header-search-input_input' placeholder='Search by Name or Email' />
      </div>
      <div
        onClick={() => {
          setVisible({ notification: false, profile: false, navapp: false, options: false })
        }}
        className={clsx(
          'absolute w-screen h-screen top-0 -left-20',
          visible.profile || visible.navapp || visible.notification || visible.options ? '' : 'hidden'
        )}
      />
      <div className='header-search-nav'>
        <button
          onClick={() => {
            setVisible({ notification: false, profile: false, options: !visible.options, navapp: false })
          }}
          className='header-search-nav_button mr-1.5'
        >
          +
        </button>
        <button
          onClick={() => {
            setVisible({ notification: false, profile: false, navapp: false, options: false })
            history.push('/tasks')
          }}
          className='h-10 w-8 rounded-full flex items-center justify-center'
        >
          <Task fill='black' />
        </button>
        <button
          onClick={() => {
            setVisible({ notification: false, profile: false, options: false, navapp: !visible.navapp })
          }}
          className='h-10 w-10 rounded-full flex items-center justify-center'
          style={visible.navapp ? { background: 'rgba(0, 171, 85, 0.08)' } : {}}
        >
          <Layers fill={visible.navapp ? '#00AB55' : 'black'} />
        </button>
        <button
          onClick={() => {
            setVisible({ notification: !visible.notification, profile: false, navapp: false, options: false })
          }}
          className='h-10 w-8 rounded-full flex items-center justify-center'
          style={visible.notification ? { background: 'rgba(0, 171, 85, 0.08)' } : {}}
        >
          <Bell stroke={visible.notification ? '#00AB55' : 'black'} />
        </button>
        <div className={clsx('profile-box', visible ? 'pointer-events-auto' : 'pointer-events-none')}>
          <Profile visible={visible.profile} onClosed={() => setVisible({ ...visible, profile: false })} />
          <Notification visible={visible.notification} />
          <NavApp visible={visible.navapp} onClosed={() => setVisible({ ...visible, navapp: false })} />
          <Options visible={visible.options} />
        </div>
        <button
          className='h-10 w-10 rounded-full flex items-center justify-center  ml-1.5'
          onClick={() => {
            setVisible({ notification: false, navapp: false, options: false, profile: !visible.profile })
          }}
        >
          <img
            className='header-search-nav-profile_img'
            src='https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt='profile'
          />
        </button>
      </div>
    </div>
  )
}

Search.propTypes = {
  burger: PropTypes.bool
}

const Bell = ({ stroke }) => {
  return (
    <svg width='20' height='20' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M13.5 6C13.5 4.80653 13.0259 3.66193 12.182 2.81802C11.3381 1.97411 10.1935 1.5 9 1.5C7.80653 1.5 6.66193 1.97411 5.81802 2.81802C4.97411 3.66193 4.5 4.80653 4.5 6C4.5 11.25 2.25 12.75 2.25 12.75H15.75C15.75 12.75 13.5 11.25 13.5 6Z'
        stroke={stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.2975 15.75C10.1657 15.9773 9.9764 16.166 9.74868 16.2971C9.52097 16.4283 9.2628 16.4973 9.00001 16.4973C8.73723 16.4973 8.47906 16.4283 8.25134 16.2971C8.02363 16.166 7.83437 15.9773 7.70251 15.75'
        stroke={stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Task = ({ fill }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 32 32'
    >
      <path d='M14 20.18l-3.59-3.59L9 18l5 5l9-9l-1.41-1.42l-7.59 7.6z' fill={fill} />
      <path
        d='M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM12 4h8v4h-8zm13 24H7V7h3v3h12V7h3z'
        fill={fill}
      />
    </svg>
  )
}

const Layers = ({ fill }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.3333 21.3333H26.6666V26.6667H21.3333V21.3333ZM13.3333 21.3333H18.6666V26.6667H13.3333V21.3333ZM5.33325 21.3333H10.6666V26.6667H5.33325V21.3333ZM21.3333 13.3333H26.6666V18.6667H21.3333V13.3333ZM13.3333 13.3333H18.6666V18.6667H13.3333V13.3333ZM5.33325 13.3333H10.6666V18.6667H5.33325V13.3333ZM21.3333 5.33334H26.6666V10.6667H21.3333V5.33334ZM13.3333 5.33334H18.6666V10.6667H13.3333V5.33334ZM5.33325 5.33334H10.6666V10.6667H5.33325V5.33334Z'
        fill={fill}
      />
    </svg>
  )
}
