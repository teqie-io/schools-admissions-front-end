import React from 'react'

export const CampusInfoField = ({ title, body, image }) => {
  return (
    <div className='mr-10'>
      <p className='text-sm font-semibold mb-1.5' style={{ color: '#6D7175' }}>
        {title}
      </p>
      {body === 'image' ? (
        <img className='rounded-full w-10 h-10' src={image} alt='campus' />
      ) : (
        <p className='text-sm font-medium mb-6' style={{ color: '#0E353D' }}>
          {body}
        </p>
      )}
    </div>
  )
}
