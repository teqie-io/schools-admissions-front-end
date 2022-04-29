import React, { useState } from 'react'
import Select from 'react-select'
import clsx from 'clsx'

import { modalSelect } from '@entities/select-style'
import { mainavatar } from '@image'
import { Checkbox } from '@stories'

export default function Admins() {
  const [value, setValue] = useState('marred@bloomingdale.edu.in')
  const [open, isOpen] = useState(false)

  const rowsData = [
    {
      active: 'active',
      name: 'Likhit Grandhi',
      role: 'Admin',
      email: 'subhas@bloomingdale.ed',
      date: '02 August, 2021'
    },
    {
      active: 'inactive',
      name: 'Subhash Atluri',
      role: 'Admin',
      date: '12 September, 2021',
      email: 'sailikhit@bloomingdale.ed'
    }
  ]
  const options = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Teacher', label: 'Teacher' },
    { value: 'Student', label: 'Student' }
  ]

  const styles = { button: { width: '9.813rem', height: '2.75rem', background: '#663174', color: '#F1F8F5' } }

  return (
    <div>
      <div
        className={clsx('company-modal', open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}
      >
        <div className='company-modal-bg' onClick={() => isOpen(!open)} />
        <div className='company-modal-card'>
          <div className='flex items-center'>
            <Users />
            <p className='ml-2 text-base font-medium text-black-default'>Add Users</p>
          </div>
          <p className='mt-2 mb-8 font-mediun text-xs' style={{ color: '#6D7175' }}>
            Add a user by entering the details. Restric the user access by assigning a role.
          </p>
          <div
            className='flex items-center mb-4 justify-between border rounded-md relative pl-4 pr-4'
            style={{ width: '30rem', height: '3.5rem' }}
          >
            <label className='text-sm bg-white p-1 absolute -top-4 left-3 text-black-default font-medium'>
              Email Address
            </label>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              style={{ width: '14rem', color: '#0E353D' }}
              className='text-sm font-medium'
              type='text'
            />
            <Select options={options} defaultValue={options[0]} styles={modalSelect} />
          </div>
          <div className='flex items-end justify-end' style={{ width: '30.5rem' }}>
            <button
              className='pl-4 pr-4 pt-2 pb-2 none-after rounded-lg mr-2'
              style={{ background: '#F1F2F3', color: '#8C9196' }}
            >
              Send Invite
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between w-full mb-10'>
        <h1 className='font-bold text-2xl'>{`Users (${rowsData.length})`}</h1>
        <button
          onClick={() => isOpen(!open)}
          className='flex items-center justify-center rounded-lg'
          style={styles.button}
        >
          Create Member
        </button>
      </div>
      <table className='w-full'>
        <thead>
          <tr className='font-medium text-xs'>
            <th align='left' className='relative' style={{ left: 6 }}>
              <Checkbox />
            </th>
            <th align='left'>Name</th>
            <th align='left'>Role</th>
            <th align='left' className='relative left-20'>
              Date Added
            </th>
            <th align='left'>Email Address</th>
            <th align='left'>Status</th>
          </tr>
        </thead>
        <tbody>
          {rowsData.map((type, key) => (
            <React.Fragment key={key}>
              <tr className='h-6' />
              <tr className='font-medium text-sm'>
                <td>
                  <img className='w-8 h-8 rounded-full' src={mainavatar} alt='admins' />
                </td>
                <td>{type.name}</td>
                <td>{type.role}</td>
                <td className='relative left-20'>{type.date}</td>
                <td>{type.email}</td>
                <td style={type.active === 'active' ? { color: '#3A8B93' } : { color: '#6C0F00' }}>
                  {type.active === 'active' ? 'Active' : 'Inactive'}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const Users = () => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z'
        fill='#663174'
      />
      <path
        d='M17 13C18.6569 13 20 11.6569 20 10C20 8.34315 18.6569 7 17 7C15.3431 7 14 8.34315 14 10C14 11.6569 15.3431 13 17 13Z'
        fill='#663174'
      />
      <path
        d='M21 19.9995C21.5523 19.9995 22 19.5518 22 18.9995C21.9984 17.0928 20.9125 15.3531 19.2003 14.514C17.4882 13.6749 15.4479 13.8826 13.94 15.0495C11.9371 13.0545 8.93071 12.46 6.31923 13.5427C3.70774 14.6253 2.00382 17.1725 2 19.9995C2 20.5518 2.44772 20.9995 3 20.9995H15C15.5523 20.9995 16 20.5518 16 19.9995'
        fill='#663174'
      />
    </svg>
  )
}
