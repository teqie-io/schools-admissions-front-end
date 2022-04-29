import React from 'react'

import google from './google.svg'
import drive from './drive.svg'

export default function Integrations() {
  const data = [
    {
      title: 'Google Drive',
      img: google,
      body: 'Google Upload integration allows students to directly upload files from their Google Drive folders into their Portfolios and Projects.',
      active: 'deactivate'
    },
    {
      title: 'One Drive',
      img: drive,
      body: 'One Drive Upload integration allows students to directly upload files from their One Drive folders into their Portfolios and Projects.',
      active: 'activate'
    }
  ]

  return (
    <div>
      <h1 className='font-bold text-base'>Intergations</h1>
      <div className='grid grid-cols-2' style={{ width: '60rem' }}>
        {data.map((item, key) => (
          <div
            key={key}
            className='rounded-lg border mt-6 flex p-6'
            style={{ width: '28.688rem', height: '11.813rem' }}
          >
            <div className='w-12 h-12'>
              <img src={item.img} className='w-11 h-11 relative bottom-3' alt='google' />
            </div>
            <div className='w-80 relative left-5'>
              <h2 className='font-bold text-base mb-2'>{item.title}</h2>
              <p className='font-medium text-xs mb-4' style={{ color: '#6D7175' }}>
                {item.body}
              </p>
              <button
                className='rounded-lg text-sm'
                style={
                  item.active === 'activate'
                    ? { width: '6.5rem', height: '2.25rem', background: '#F1F8F5', color: '#008060' }
                    : { width: '6.5rem', height: '2.25rem', background: '#FFF4F4', color: '#D72C0D' }
                }
              >
                {item.active === 'activate' ? 'Activate' : 'Deactivate'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
