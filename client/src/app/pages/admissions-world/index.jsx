import React from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import { NavLinks } from '@components/header'
import { dataLinks } from '@entities/routes'
import wormies from './wormies.png'
import './admissions-world.scss'

export default function AdmissionsWorld({ burger }) {
  return (
    <div className={clsx('admissions-world pr-24', burger ? 'pl-80' : 'pl-40')}>
      <NavLinks urls={dataLinks.admissionsWorldLinks} />
      <h1 className='namepage'>Campus Admisssion Settings</h1>
      <p className='font-bold text-sm p-1 pr-5 mb-4'>Pre Enquiry Stages</p>
      <div className='grid grid-cols-4 2xl:grid-cols-6 pl-4'>
        {enquiryLinks.map((item, key) => (
          <NavLink
            className='flex flex-col transform hover:-translate-y-1 transition-all mb-10 mr-10 items-center overflow-ellipsis justify-center rounded-xl shadow-standart'
            to={item.link}
            key={key}
            style={{ width: '11.813rem', height: '14.875rem' }}
          >
            {item.img ? <img src={item.img} alt='settings' className='w-46 h-28' /> : <div className='w-46 h-28' />}
            <p className='overflow-ellipsis overflow-hidden whitespace-pre w-26 text-center font-semibold text-sm mt-12'>
              {item.label}
            </p>
          </NavLink>
        ))}
      </div>
      <p className='font-bold text-sm p-1 pr-5 mb-4'>Enquiry Stages </p>
      <div className='grid grid-cols-4 2xl:grid-cols-6 pl-4'>
        {stagesLinks.map((item, key) => (
          <NavLink
            className='flex flex-col mr-2.5 transform hover:-translate-y-1 transition-all mb-10 items-center overflow-ellipsis justify-center rounded-xl shadow-standart'
            to={item.link}
            key={key}
            style={{ width: '11.813rem', height: '14.875rem' }}
          >
            {item.img ? <img src={item.img} alt='settings' className='w-46 h-28' /> : <div className='w-46 h-28' />}
            <p className='overflow-ellipsis overflow-hidden whitespace-pre w-26 text-center font-semibold text-sm mt-12'>
              {item.label}
            </p>
          </NavLink>
        ))}
      </div>
      <p className='font-bold text-sm p-1 pr-5 mb-4'>Admission Stage</p>
      <div className='grid grid-cols-4 2xl:grid-cols-6 pl-4'>
        {admissionsLinks.map((item, key) => (
          <NavLink
            className='flex flex-col transform hover:-translate-y-1 transition-all mb-10 items-center overflow-ellipsis justify-center rounded-xl shadow-standart'
            to={item.link}
            key={key}
            style={{ width: '11.813rem', height: '14.875rem' }}
          >
            {item.img ? <img src={item.img} alt='settings' className='w-46 h-28' /> : <div className='w-46 h-28' />}
            <p className='overflow-ellipsis overflow-hidden whitespace-pre w-26 text-center font-semibold text-sm mt-12'>
              {item.label}
            </p>
          </NavLink>
        ))}
      </div>
      <p className='font-bold text-sm p-1 pr-5 mb-4'>Other Settings</p>
      <div className='grid grid-cols-4 2xl:grid-cols-6 pl-4'>
        {otherLinks.map((item, key) => (
          <NavLink
            className='flex flex-col transform hover:-translate-y-1 transition-all mb-10 items-center overflow-ellipsis justify-center rounded-xl shadow-standart'
            to={item.link}
            key={key}
            style={{ width: '11.813rem', height: '14.875rem' }}
          >
            {item.img ? <img src={item.img} alt='settings' className='w-46 h-28' /> : <div className='w-46 h-28' />}
            <p className='overflow-ellipsis overflow-hidden whitespace-pre w-26 text-center font-semibold text-sm mt-12'>
              {item.label}
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

const enquiryLinks = [
  { link: '/', label: 'Leads Generation', img: wormies },
  { link: '/', label: 'Digital marketing', img: null },
  { link: '/', label: 'Call Center', img: null },
  { link: '/', label: 'Email marketing', img: null }
]

const stagesLinks = [
  { link: '/', label: 'Campus Visit', img: null },
  { link: '/', label: 'Application', img: null },
  { link: '/', label: 'Admission Test', img: null }
]

const admissionsLinks = [
  { link: '/', label: 'Approvals', img: null },
  { link: '/', label: 'Scholarship', img: null },
  { link: '/', label: 'Conversion', img: null }
]

const otherLinks = [
  { link: '/', label: 'Tasks', img: null },
  { link: '/', label: 'Fields', img: null },
  { link: '/', label: 'Stages', img: null }
]
