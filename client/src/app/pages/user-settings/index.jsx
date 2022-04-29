import React, { useState } from 'react'
import clsx from 'clsx'

import Editor from '@components/editor/editor'
import { microsoft, google } from '@app/components/login/image'
import { NavLinks } from '@components/header'
import { dataLinks } from '@entities/routes'
import { CompanyTabs } from '@stories'
import './user-settings.scss'

const dataTypes = ['Connection', 'Signature', 'Visibility', 'Operations']

const componentRender = [
  { type: 'Connection', component: (key) => <Connection key={key} /> },
  { type: 'Signature', component: (key) => <Signature key={key} /> },
  { type: 'Visibility', component: (key) => <Visibility key={key} /> },
  { type: 'Operations', component: (key) => <div key={key} /> }
]

export default function UserSettings({ burger }) {
  const [typeState, setTypeState] = useState(dataTypes && dataTypes[0])

  return (
    <div className={clsx('user-settings pr-24', burger ? 'pl-24 1400px:pl-80' : 'pl-24 1400px:pl-40')}>
      <NavLinks urls={dataLinks.emailLinks} />
      <div className='namepage'>Email</div>
      <div className='flex items-center w-full mb-12'>
        <CompanyTabs types={dataTypes} setTypeState={setTypeState} typeState={typeState} />
      </div>
      {componentRender.map((item, key) => item.type === typeState && item.component(key))}
    </div>
  )
}

const Connection = () => {
  return (
    <div>
      <p className='text-base font-bold'>Add your Email Address</p>
      <p className='text-sm font-normal mt-3 mb-8' style={{ color: 'rgba(0, 0, 0, 0.6)', width: '36.2rem' }}>
        Connecting your email to Giiki will let you communicate to Prospective parents through App. It is a easy way to
        track all the communication linked to enquiry in one place
      </p>
      <div className='flex items-center'>
        <button
          className='rounded-lg border mr-4 flex items-center justify-center text-sm font-medium'
          style={{ width: '27.625rem', height: '2.375rem' }}
        >
          <img src={google} className='mr-2' alt='google' />
          Signin with Google
        </button>
        <button
          className='rounded-lg border mr-4 flex items-center justify-center text-sm font-medium'
          style={{ width: '27.625rem', height: '2.375rem' }}
        >
          <img src={microsoft} className='mr-2' alt='microsoft' />
          Signin with Microsoft
        </button>
      </div>
    </div>
  )
}

const Signature = () => {
  return (
    <div>
      <p className='text-base font-bold' style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
        Signature
      </p>
      <p className='text-sm font-normal mt-3 mb-3' style={{ color: 'rgba(0, 0, 0, 0.6)', width: '36.8rem' }}>
        Customise your digital signture add add relevant info to showcase at the bottom of every email
      </p>
      <Editor />
    </div>
  )
}

const Visibility = () => {
  return (
    <div style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
      <p className='text-base font-bold'>Signature</p>
      <p className='text-sm font-normal mt-3 mb-10' style={{ maxWidth: '42.5rem' }}>
        Changes to visibility settings will be applied to all past emails as well as all future emails once they are
        saved. Any emails in which manual visibility settings were applied will remain the same
      </p>
      <p className='flex items-center text-sm font-medium mb-5'>
        My Email Conversations on the Enquiries are
        <span className='flex items-center ml-2 text-main-blue cursor-pointer'>
          visible to owners and Collabrators
          <Arrow />
        </span>
      </p>
      <p className='flex items-center text-sm font-medium mb-5'>
        My Email Conversations on the Students are
        <span className='flex items-center ml-2 text-main-blue cursor-pointer'>
          visible to all users with access
          <Arrow />
        </span>
      </p>
      <p className='flex items-center text-sm font-medium mb-5'>
        My Email Conversations on the Failed Leads are
        <span className='flex items-center ml-2 text-main-blue cursor-pointer'>
          Not visible to users
          <Arrow />
        </span>
      </p>
      <p className='flex items-center text-sm font-medium mb-5'>
        My Email Conversations on the Failed Leads are
        <span className='flex items-center ml-2 text-main-blue cursor-pointer'>
          Not visible to users
          <Arrow />
        </span>
      </p>
    </div>
  )
}

const Arrow = () => {
  return (
    <svg width='20' height='24' className='ml-2' viewBox='0 0 20 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4.88257 8.77832L9.76509 14.6304L14.6476 8.77832'
        stroke='#404EED'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  )
}
