import React, { useState } from 'react'
import clsx from 'clsx'

import EditPanelCards from './edit-panel-cards.jsx'

export default function EditPanelContent({ cards }) {
  return cards.map((card, key) => {
    const [open, isOpen] = useState(false)

    return (
      <div key={key} className='edit-panel--card'>
        <div className='edit-panel--card--header' onClick={() => isOpen(!open)}>
          <div className='flex items-center'>
            <button className='none-after ml-2 mr-2'>
              <CardArrow open={open} />
            </button>
            <div>
              <p className='text-base font-medium'>{card.title}</p>
              <div className='flex items-center text-xs' style={{ color: 'rgba(33, 43, 54, 0.6)' }}>
                <img className='w-5 h-5 rounded-full mr-2.5' src={card.image} alt='profile' />
                {card.persona}
              </div>
            </div>
          </div>
          <div className='flex flex-col items-end mr-3'>
            <button className='none-after cursor-pointer mb-2'>
              <Crumbs />
            </button>
            <p className='text-xs font-medium' style={{ color: 'rgba(33, 43, 54, 0.6)' }}>
              <span style={{ color: '#0E4DA4' }}>{card.edits.length}</span> edits
            </p>
          </div>
        </div>
        {open && (
          <div className='edit-panel--card--content'>
            {card.edits.length > 1 && (
              <div
                className='absolute top-4'
                style={{
                  left: '1.21rem',
                  width: '0.063rem',
                  height: `calc(3rem + ${(card.edits.length - 2) * 3 + card.edits.length / 10}rem)`,
                  background: '#e5e7eb'
                }}
              />
            )}
            <EditPanelCards edits={card.edits} />
          </div>
        )}
      </div>
    )
  })
}

const CardArrow = ({ open }) => {
  return (
    <svg
      width='23'
      className={clsx('transition-all transform', open ? 'rotate-180' : 'rotate-0')}
      height='25'
      viewBox='0 0 23 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.90088 9.5L11.4997 15.5L17.0986 9.5'
        stroke='black'
        strokeOpacity='0.3'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Crumbs = () => {
  return (
    <svg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='8.69759' cy='7.99984' r='1.33333' fill='#212B36' />
      <circle cx='8.69759' cy='3.33333' r='1.33333' fill='#212B36' />
      <ellipse cx='8.69759' cy='12.6668' rx='1.33333' ry='1.33333' fill='#212B36' />
    </svg>
  )
}
