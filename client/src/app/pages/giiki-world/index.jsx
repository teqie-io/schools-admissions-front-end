import React, { useState } from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

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
} from '@components/header/search/sub-components/nav-app/image'

import './giiki-world.scss'

export default function GiikiWorld({ burger }) {
  return (
    <div className={clsx('giiki-world', burger ? '1400px:pl-80 pl-36' : 'pl-36 1400px:pl-40')}>
      <Fade clear duration={300}>
        <h1 className='namepage'>Giiki World</h1>
        <p className='font-bold text-sm p-1 pr-5 mb-4'>Central Apps</p>
        <div className='grid grid-cols-4 2xl:grid-cols-6 pl-4'>
          {appLinks.map((item, key) => (
            <NavLink
              className='flex flex-col transform hover:-translate-y-1 transition-all mb-10 items-center overflow-ellipsis justify-center rounded-xl shadow-mini'
              to={item.link}
              key={key}
              style={{ width: '9.938rem', height: '10.188rem' }}
            >
              <img
                src={item.img}
                alt='settings'
                className={` ${item.img === graphstats || item.img === calls ? 'w-20' : 'w-14'} h-14`}
              />
              <p className='overflow-ellipsis overflow-hidden whitespace-pre w-26 text-center text-sm mt-4'>
                {item.label}
              </p>
            </NavLink>
          ))}
          {comingSoon.map((item, key) => (
            <div
              className='relative flex flex-col cursor-not-allowed mb-10 items-center overflow-ellipsis justify-center rounded-xl shadow-mini'
              key={key}
              style={{ width: '9.938rem', height: '10.188rem' }}
            >
              <img
                src={item.img}
                alt='settings'
                className={` ${item.img === graphstats || item.img === calls ? 'w-20' : 'w-14'} h-14 opacity-50`}
              />
              <p className='overflow-ellipsis overflow-hidden whitespace-pre w-26 text-center text-sm mt-4 opacity-50'>
                {item.label}
              </p>
              <p className='absolute bottom-3.5 overflow-ellipsis overflow-hidden whitespace-pre w-26 text-center text-sm mt-4 opacity-50'>
                Coming soon...
              </p>
            </div>
          ))}
        </div>
        <p className='font-bold text-sm p-1 pr-5 mb-4'>Campus Apps</p>
        <div className='grid grid-cols-4 2xl:grid-cols-6 pl-4'>
          {campusLinks.map((item, key) => (
            <NavLink
              className='flex flex-col transform hover:-translate-y-1 transition-all mb-10 items-center overflow-ellipsis justify-center rounded-xl shadow-mini'
              to={item.link}
              key={key}
              style={{ width: '9.938rem', height: '10.188rem' }}
            >
              <img src={item.img} alt='settings' className='w-14 h-14' />
              <p className='overflow-ellipsis overflow-hidden whitespace-pre w-26 text-center text-sm mt-4'>
                {item.label}
              </p>
            </NavLink>
          ))}
        </div>
      </Fade>
    </div>
  )
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
