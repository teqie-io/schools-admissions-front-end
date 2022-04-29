import React from 'react'

import { CampusInfoField } from './campus-info-field.jsx'
import { mainavatar } from '@image'

export default function General() {
  const data = [
    {
      name: 'Likhit Grandhi',
      role: 'Princiapl',
      image: mainavatar,
      email: 'sailikhit@bloomingdale.ed',
      active: 'Active'
    },
    {
      name: 'Subhash Atluri',
      role: 'IT Administrator',
      image: mainavatar,
      email: 'subhas@bloomingdale.ed',
      active: 'Inactive'
    }
  ]

  return (
    <div>
      <CampusInfoField title='Campus Name' body='Nalanda Vidyanikethan Primary' />
      <CampusInfoField title='Address Line 1' body='High Tension Road, Beside Hanuman temple' />
      <CampusInfoField title='Address Line 2' body='Kala Nagar Road' />
      <div className='flex items-center'>
        <CampusInfoField title='City' body='Vijaywada' />
        <CampusInfoField title='State' body='Andhra Pradesh' />
        <CampusInfoField title='Country' body='India' />
      </div>
      <div className='flex items-center'>
        <CampusInfoField title='Contact Number' body='+91788434323' />
        <CampusInfoField title='Secondary Contact' body='+06045223423' />
        <CampusInfoField title='Email' body='contact@nalanda.edu.in' />
      </div>
      <CampusInfoField title='Campus Logo' body='image' image={mainavatar} />
      <div className='w-full mt-12 mb-12' style={{ height: 1, background: '#E1E3E5' }} />
      <p className='text-sm font-semibold mb-5' style={{ color: '#6D7175' }}>
        Key Memebers
      </p>
      {data.map((item, key) => (
        <div
          key={key}
          className='flex items-center justify-between ml-2.5 mb-5  text-sm font-medium'
          style={{ width: '50rem' }}
        >
          <div className='flex items-center' style={{ width: '300px' }}>
            <img src={item.image} className='rounded-full w-8 h-8 mr-5' alt='personal' />
            {item.name}
          </div>
          <p className='text-main-black' style={{ width: '150px' }}>
            {item.role}
          </p>
          <p style={{ width: '250px', color: '#6D7175' }}>{item.email}</p>
          <p style={{ width: '100px', color: item.active === 'Active' ? '#3A8B93' : '#A21B00' }}>{item.active}</p>
        </div>
      ))}
    </div>
  )
}
