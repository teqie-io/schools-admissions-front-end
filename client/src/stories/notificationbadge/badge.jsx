import React from 'react'
import PropTypes from 'prop-types'

import './badge.scss'
import { mainavatar } from '../../app/static/image'

export default function NotificationBadge({ firstText, secondText, image, time }) {
  return (
    <button className='notification-task'>
      <div className='rounded-full flex items-center justify-center w-12 h-12  mr-4 bg-main-white'>
        <img src={image} className='w-6 h-6' alt='' />
      </div>
      <div className='flex flex-col items-start w-64'>
        <p className='font-bold text-sm text-left'>
          {firstText} <span className='font-medium pl-1 text-second-gray'>{secondText}</span>
        </p>
        <div className='flex items-center mt-1'>
          <Clock />
          <p className='text-second-gray text-sm pl-1'>{time}</p>
        </div>
      </div>
    </button>
  )
}

const Clock = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2 12C2 6.47715 6.47715 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H13V8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V12C11 12.5523 11.4477 13 12 13Z'
        fill='#637381'
      />
    </svg>
  )
}

NotificationBadge.propTypes = {
  firstText: PropTypes.string,
  secondText: PropTypes.string,
  image: PropTypes.string,
  time: PropTypes.string
}

NotificationBadge.defaultProps = {
  firstText: 'Your order is placed',
  secondText: 'waiting for shipping',
  image: mainavatar,
  time: '1 days'
}
