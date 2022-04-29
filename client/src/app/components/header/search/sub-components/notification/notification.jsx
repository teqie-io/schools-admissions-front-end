import React, { useState } from 'react'
import Zoom from 'react-reveal/Zoom'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { chat, mail, packages, shipping } from './image'
import { mainavatar } from '../../../../../static/image'

export default function Notification({ visible, onClosed }) {
  const [view, setView] = useState(false)

  return (
    <Zoom duration={300} when={visible}>
      <div
        className={clsx('profile-box-card', 'absolute top-0 right-12', visible ? '' : 'hidden')}
        style={{ width: '22.5rem', height: '41.063rem' }}
      >
        <div className='border-b p-4 flex items-center justify-between pr-5 pl-5'>
          <div>
            <p className='text-main-black text-base font-semibold leading-6'>Notifications</p>
            <p className='text-second-gray text-sm'>You have {!view ? '2' : '0'} unread messages</p>
          </div>
          <Zoom duration={300} when={!view}>
            <button className='marks-all-read' onClick={() => setView(true)}>
              <DoubleDone />
            </button>
          </Zoom>
        </div>
        <div>
          <p className='text-second-gray font-bold text-sm p-1 pr-5 pl-5'>NEW</p>
          {newNotification.map((item, key) => (
            <button key={key} className={clsx('notification-task', !view ? 'notification-task__read' : null)}>
              <div className='rounded-full flex items-center justify-center w-12 h-12  mr-4 bg-main-white'>
                <img src={item.img} className='w-6 h-6' alt='' />
              </div>
              <div className='flex flex-col items-start w-64'>
                <p className='font-bold text-sm text-left'>
                  {item.firstText} <span className='font-medium pl-1 text-second-gray'>{item.secondText}</span>
                </p>
                <div className='flex items-center mt-1'>
                  <Clock />
                  <p className='text-second-gray text-sm pl-1'>{item.time}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div>
          <p className='text-second-gray font-bold text-sm pb-1 pt-2 pr-5 pl-5'>BEFORE THAT</p>
          {beforeNotification.map((item, key) => (
            <button key={key} className='notification-task'>
              <div className='rounded-full flex items-center justify-center w-12 h-12  mr-4 bg-main-white'>
                <img src={item.img} className='w-6 h-6' alt='' />
              </div>
              <div className='flex flex-col items-start w-64'>
                <p className='font-bold text-sm text-left'>
                  {item.firstText} <span className='font-medium pl-1 text-second-gray'>{item.secondText}</span>
                </p>
                <div className='flex items-center mt-1'>
                  <Clock />
                  <p className='text-second-gray text-sm pl-1'>{item.time}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className='absolute bottom-0 border-t w-full p-2 flex items-center justify-center'>
          <button className='notification-all'>View All</button>
        </div>
      </div>
    </Zoom>
  )
}

Notification.propTypes = {
  visible: PropTypes.bool,
  onCLosed: PropTypes.func
}

const DoubleDone = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <path
        d='M16.62 6.21011C16.4109 6.04457 16.1444 5.96941 15.8796 6.00133C15.6148 6.03326 15.3738 6.16962 15.21 6.38011L8.21001 15.3801L4.78001 11.2001C4.56095 10.9085 4.20051 10.7593 3.83944 10.8107C3.47837 10.8622 3.17395 11.1061 3.04503 11.4473C2.91612 11.7885 2.98318 12.1728 3.22001 12.4501L7.39001 17.6301C7.58064 17.8651 7.86742 18.0011 8.17001 18.0001C8.49172 18.0145 8.80067 17.873 9.00001 17.6201L16.83 7.62011C16.9913 7.40604 17.0598 7.13621 17.0204 6.87112C16.9809 6.60604 16.8366 6.3679 16.62 6.21011Z'
        fill='#00AB55'
      />
      <path
        d='M21.6201 6.21011C21.411 6.04457 21.1444 5.96941 20.8797 6.00133C20.6149 6.03326 20.3738 6.16962 20.2101 6.38011L13.2101 15.3801L12.6001 14.6301L11.3401 16.2501L12.4401 17.6201C12.6307 17.8551 12.9175 17.9911 13.2201 17.9901C13.5244 17.9887 13.8114 17.8488 14.0001 17.6101L21.8301 7.61011C21.9882 7.39671 22.0549 7.12919 22.0155 6.86656C21.9761 6.60392 21.8338 6.36775 21.6201 6.21011Z'
        fill='#00AB55'
      />
      <path
        d='M8.71007 13.0599L10.0001 11.4399L9.80007 11.1999C9.64054 10.9789 9.39769 10.8326 9.12774 10.7948C8.85778 10.757 8.58412 10.8311 8.37007 10.9999C8.16259 11.1666 8.03011 11.4091 8.00195 11.6737C7.9738 11.9384 8.0523 12.2033 8.22007 12.4099L8.71007 13.0599Z'
        fill='#00AB55'
      />
    </svg>
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

const newNotification = [
  {
    img: packages,
    firstText: 'Your order is placed',
    secondText: 'waiting for shipping',
    time: 'less than a minute'
  },
  {
    img: mainavatar,
    firstText: 'Sylvan King',
    secondText: 'answered to your comment on the minimal',
    time: '1 days'
  }
]

const beforeNotification = [
  {
    img: chat,
    firstText: 'You have new message ',
    secondText: '5 unread messages',
    time: '2 days'
  },
  {
    img: mail,
    firstText: 'You have new mail',
    secondText: 'sent from guido padberg',
    time: '3 days'
  },
  {
    img: shipping,
    firstText: 'Delivery processing',
    secondText: 'your order is being shipped',
    time: '4 days'
  }
]
