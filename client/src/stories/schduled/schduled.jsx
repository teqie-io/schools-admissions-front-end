import React from 'react'

import './schduled.scss'
import clsx from 'clsx'
import { search, mainavatar } from '../../app/static/image'

export default function Schduled({ bloom = false }) {
  return (
    <div className={clsx('your-test mb-10', bloom && 'shadow-none')}>
      <div className='date'>
        {!bloom && (
          <div className='date_scheduler'>
            <p className='date_scheduler-text'>Your Test Date is Schduled by</p>
            <img alt='' src={mainavatar} className='date_scheduler-image' />
          </div>
        )}
        <div className='date_details'>
          <div className='date_details-date'>
            <p className='date_details-text'>Test Date</p>
            <p className='date_details-schedule'>21 January 2020</p>
          </div>
          <div className='date_details-time'>
            <p className='date_details-text'>Time</p>
            <p className='date_details-schedule'>12:00 - 12:30 PM</p>
          </div>
        </div>
      </div>
      {!bloom ? (
        <div className='proctor'>
          <p className='proctor_text'>Assign a proctor</p>
          <div className='proctor_search'>
            <img src={search} alt='' className='proctor_search-tool' />
            <input type='text' placeholder='Search Team' className='proctor_search-input' />
          </div>
          <button className='proctor_button'>Reschdule Test</button>
        </div>
      ) : (
        <div className='flex items-center justify-start'>
          <p className='relative right-20 font-semibold' style={{ color: '#ababcd' }}>
            wanting to re-schedule? <span className='text-main-blue cursor-pointer'>click here</span>
          </p>
        </div>
      )}
    </div>
  )
}
