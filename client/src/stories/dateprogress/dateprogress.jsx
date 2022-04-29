import React from 'react'
import PropTypes from 'prop-types'

export default function DateProgress({ date, num }) {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-second-gray text-sm'>{date}</p>
      <div
        className='rounded-lg border w-140 mb-1'
        style={{
          height: '0.438rem',
          background: `linear-gradient(to right, #27C59A ${num}%, #fff ${num - 10}%)`
        }}
      />
    </div>
  )
}

DateProgress.propTypes = {
  date: PropTypes.string,
  num: PropTypes.number
}
