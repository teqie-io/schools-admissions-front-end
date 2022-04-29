import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import { mainavatar } from '@app/static/image'
import { dashboard, dashboardhover, file, filehover, history, historyhover, close, mail } from '../image'
import BloomLinks from '@app/components/bloomingdale/links/links'
import BloomHeader from '@app/components/bloomingdale/header/header'
import './dashboard.scss'

const types = [
  { title: 'Application Dashboard', image: dashboard, hoverImage: dashboardhover },
  { title: 'Apply Now', image: file, hoverImage: filehover },
  { title: 'Schedule a Meeting', image: history, hoverImage: historyhover }
]

export default function BloomDashboard() {
  const [type, setType] = useState(types && types[0].title)
  const [notification, setNotification] = useState(true)

  const appStyle = document.getElementsByClassName('app')

  useEffect(() => {
    if (appStyle && appStyle[0]) appStyle[0].style.overflowX = 'hidden'
  }, [])

  return (
    <div>
      <BloomHeader />
      <div className='mt-24 pl-24 w-sceren flex mb-10'>
        {types.map((item, key) => (
          <button
            key={key}
            className={clsx(
              'transition-all text-sm font-semibold none-after flex items-center mr-10',
              item.title === type && 'text-main-blue'
            )}
            onClick={() => setType(item.title)}
          >
            <img className='w-4 h-4 mr-2.5' src={item.title === type ? item.hoverImage : item.image} alt={item.title} />
            {item.title}
          </button>
        ))}
      </div>
      <div className='w-screen flex items-start pl-20 pr-20'>
        <div className='w-full grid grid-cols-2'>
          <div>
            {notification && (
              <div className='applicant-notification'>
                <img src={mail} alt='mailread' className='w-28 h-24 mr-3 relative bottom-3' />
                <div className='text-sm font-semibold'>
                  <p className='mb-2.5'>🎉 Hurrary ! Thank you for your inteest in Bloomingdale International School</p>
                  <p>Our parent counselor will get in touch with you</p>
                </div>
                <button className='absolute top-4 right-4' onClick={() => setNotification(false)}>
                  <img src={close} className='w-4 h-4' alt='close' />
                </button>
              </div>
            )}
            <h1 className={clsx('text-sm font-semibold mb-8', notification ? 'mt-10' : 'mt-2')}>Applicant Details</h1>
            <div className='applicant-details'>
              <div className='applicant-details-header'>
                <div className='flex items-center'>
                  <img className='w-16 h-16 rounded-full mr-3' src={mainavatar} alt='avatar' />
                  <div>
                    <p>Maria Marko</p>
                    <p>Female, MY2, ROI</p>
                  </div>
                </div>
                <p style={{ color: '#37b57e' }}>ROI Submitted</p>
              </div>
              <div className='grid grid-cols-2 pl-10 pt-12'>
                {dataTextFlow.map((item, key) => (
                  <TextFlow key={key} title={item.title} body={item.body} />
                ))}
              </div>
              <NavLink to='/bloomingdale-details'>
                <button className='ml-10 mt-8 none-after flex items-center font-semibold' style={{ color: '#1f0cdc' }}>
                  Proceed to Application
                  <Arrow />
                </button>
              </NavLink>
            </div>
          </div>
          <div className='relative left-40'>
            <h1 className='text-sm font-semibold mb-8'>Application Checklist</h1>
            <div className='application-checklist'>
              {dataChecklist.map((item, key) => (
                <div
                  key={key}
                  className='text-sm font-semibold flex items-center mb-7'
                  style={item.done ? { color: '#33ac72' } : { color: '#ababcd' }}
                >
                  {item.done ? <Done /> : <Close />}
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
        <BloomLinks />
      </div>
    </div>
  )
}

const dataTextFlow = [
  { title: 'First Name', body: 'Maria' },
  { title: 'Last Name', body: 'Marko' },
  { title: 'Gender', body: 'Female' },
  { title: 'Birth Date', body: 'Jan 9, 2016' },
  { title: 'Contacn Number', body: '+91 888 787 8612' },
  { title: 'Email Address', body: 'johnmarko@gmail.com' }
]

const TextFlow = ({ title, body }) => {
  return (
    <div className='text-sm font-semibold'>
      <p className='mb-2.5' style={{ color: '#cccce0' }}>
        {title}
      </p>
      <p className='mb-2.5'>{body}</p>
    </div>
  )
}

const Arrow = () => {
  return (
    <svg width='24' height='24' className='ml-8' viewBox='0 -2 24 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M8.55 2.5L7 4.05L14.95 12L7 19.95L8.55 21.5L18 12L8.55 2.5Z' fill='#1f0cdc' />
    </svg>
  )
}

const dataChecklist = [
  { title: 'Submit Registration on interest', done: true },
  { title: 'Schedule Tour Visit', done: false },
  { title: 'Submit Application', done: false },
  { title: 'Admissions Testing Resgistration', done: false },
  { title: 'Document Uploads', done: false },
  { title: 'Fee Payment', done: false }
]

const Done = () => {
  return (
    <svg width='20' className='mr-3' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.66602 10C1.66602 5.39763 5.39698 1.66667 9.99935 1.66667C12.2095 1.66667 14.3291 2.54464 15.8919 4.10744C17.4547 5.67025 18.3327 7.78986 18.3327 10C18.3327 14.6024 14.6017 18.3333 9.99935 18.3333C5.39698 18.3333 1.66602 14.6024 1.66602 10ZM9.77435 13.0083L13.5827 8.00834V7.98334C13.7643 7.74516 13.805 7.42819 13.6896 7.15182C13.5741 6.87545 13.32 6.68168 13.0229 6.64349C12.7258 6.60529 12.431 6.72849 12.2493 6.96667L9.09935 11.1333L7.74102 9.4C7.55792 9.1648 7.26325 9.04515 6.96801 9.08612C6.67277 9.12709 6.42182 9.32245 6.30968 9.59862C6.19754 9.87479 6.24125 10.1898 6.42435 10.425L8.45768 13.0167C8.6167 13.2179 8.85953 13.3347 9.11602 13.3333C9.37393 13.3327 9.61702 13.2127 9.77435 13.0083Z'
        fill='#33ac72'
      />
    </svg>
  )
}

const Close = () => {
  return (
    <svg width='20' className='mr-3' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.66602 10C1.66602 5.39763 5.39698 1.66667 9.99935 1.66667C12.2095 1.66667 14.3291 2.54464 15.8919 4.10744C17.4547 5.67025 18.3327 7.78986 18.3327 10C18.3327 14.6024 14.6017 18.3333 9.99935 18.3333C5.39698 18.3333 1.66602 14.6024 1.66602 10ZM12.5042 11.6667C12.5042 11.4445 12.4154 11.2315 12.2577 11.075L11.1743 10L12.2577 8.925C12.5844 8.59823 12.5844 8.06844 12.2577 7.74167C11.9309 7.4149 11.4011 7.4149 11.0743 7.74167L9.99935 8.825L8.92435 7.74167C8.59758 7.4149 8.06778 7.4149 7.74101 7.74167C7.41425 8.06844 7.41425 8.59823 7.74101 8.925L8.82435 10L7.74101 11.075C7.58325 11.2315 7.49452 11.4445 7.49452 11.6667C7.49452 11.8889 7.58325 12.1019 7.74101 12.2583C7.89749 12.4161 8.11048 12.5048 8.33268 12.5048C8.55488 12.5048 8.76788 12.4161 8.92435 12.2583L9.99935 11.175L11.0743 12.2583C11.2308 12.4161 11.4438 12.5048 11.666 12.5048C11.8882 12.5048 12.1012 12.4161 12.2577 12.2583C12.4154 12.1019 12.5042 11.8889 12.5042 11.6667Z'
        fill='#ababcd'
      />
    </svg>
  )
}
