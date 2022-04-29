import React from 'react'

export default function SelectDomainCard({ image, title }) {
  return (
    <div className='flex'>
      <div
        className={`border-light-green cursor-pointer bg-ligther-gray rounded-lg flex flex-col items-center border`}
        style={{ width: '17.563rem', height: '21.75rem' }}
      >
        <p className='text-sm font-medium mt-8 mb-6'>{title}</p>
        <img src={image} className='w-36 h-28' alt='cityscapes' />
      </div>
    </div>
  )
}
