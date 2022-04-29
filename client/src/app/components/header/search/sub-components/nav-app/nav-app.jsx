import React, { useState } from 'react'
import Zoom from 'react-reveal/Zoom'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import {
  graphstats,
  hr,
  mobile,
  stuck,
  settings,
  building,
  calls,
  carco,
  cash,
  directions,
  dollar,
  edu,
  family
} from './image'

export default function NavApp({ visible, onClosed }) {
  return (
    <Zoom duration={300} when={visible}>
      <div
        className={clsx(
          'profile-box-card',
          'absolute pl-4 pt-4 pb-4 top-0 right-24 overflow-y-scroll',
          visible ? '' : 'hidden'
        )}
        style={{ width: '26rem', height: '20.063rem' }}
      >
        <p className='text-second-gray font-bold text-sm p-1 pr-5 pl-5 mb-4'>Central Apps</p>
        <div className='grid grid-cols-3 '>
          {appLinks.map((item, key) => (
            <NavLink
              className='flex flex-col transform hover:-translate-y-1 transition-all mb-4 items-center overflow-ellipsis justify-center w-28 h-28 rounded-xl shadow-mini'
              to={item.link}
              onClick={onClosed}
              key={key}
            >
              <img
                src={item.img}
                alt='settings'
                className={` ${item.img === graphstats || item.img === calls ? 'w-20' : 'w-14'} h-14`}
              />
              <p className='overflow-ellipsis overflow-hidden whitespace-pre w-24 text-center text-sm mt-2'>
                {item.label}
              </p>
            </NavLink>
          ))}
          {comingSoon.map((item, key) => (
            <div
              className='relative flex flex-col cursor-not-allowed mb-4 items-center overflow-ellipsis justify-center w-28 h-28 rounded-xl shadow-mini'
              onClick={onClosed}
              key={key}
            >
              <img
                src={item.img}
                alt='settings'
                className={` ${item.img === graphstats || item.img === calls ? 'w-20' : 'w-14'} h-14 opacity-50`}
              />

              <p className='overflow-ellipsis overflow-hidden whitespace-pre w-24 text-center text-sm mt-2 opacity-50'>
                Coming soon...
              </p>
            </div>
          ))}
        </div>
        <p className='text-second-gray font-bold text-sm p-1 pr-5 pl-5 mb-4'>Campus Apps</p>
        <div className='grid grid-cols-3'>
          {campusLinks.map((item, key) => (
            <NavLink
              className='flex flex-col transform hover:-translate-y-1 transition-all mb-4 items-center overflow-ellipsis justify-center w-28 h-28 rounded-xl shadow-mini'
              to={item.link}
              onClick={onClosed}
              key={key}
            >
              <img src={item.img} alt='settings' className='w-14 h-14' />
              <p className='overflow-ellipsis overflow-hidden whitespace-pre w-24 text-center text-sm mt-2'>
                {item.label}
              </p>
            </NavLink>
          ))}
        </div>
      </div>
    </Zoom>
  )
}

NavApp.propTypes = {
  visible: PropTypes.bool,
  onCLosed: PropTypes.func
}

const appLinks = [
  { link: '/application/application', label: 'Campus', img: settings },
  { link: '/finance/feebooks', label: 'Finance', img: graphstats },
  { link: '/campus/academic/middle', label: 'Admissons', img: calls }
]

const comingSoon = [
  { label: 'Transport', img: directions },
  { label: 'Stores', img: mobile },
  { label: 'HR', img: hr },
  { label: 'Accounting', img: stuck },
  { link: '/campus/academic/middle', label: 'Academics', img: edu },
  { label: 'Purchases', img: dollar },
  { label: 'Inventory', img: carco }
]
const campusLinks = [
  { link: '/application/application', label: 'Campus Settings', img: building },
  { link: '/campus/academic/middle', label: 'Admissions', img: family },
  { link: '/finance/feebooks', label: 'Finance', img: cash }
]
