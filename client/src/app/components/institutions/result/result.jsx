import React from 'react'
import clsx from 'clsx'

export default function Result({ resultDot }) {
  return (
    <div className='institutions-modal_result'>
      {resultDot.map((item, key) => {
        const dotStyleCheck =
          (item.dot === 'unactive' && 'border border-dot-gray') ||
          (item.dot === 'active' && 'bg-main-blue') ||
          (item.dot === 'done' && 'bg-second-gray')

        return (
          <React.Fragment key={key}>
            <div className='flex items-center'>
              <div className={clsx('w-4 h-4 rounded-full', dotStyleCheck)} />
              <p
                className={clsx(
                  'text-sm font-medium ml-4',
                  item.dot === 'active' ? 'text-discord-black' : 'text-discord-gray'
                )}
              >
                {item.text}
              </p>
            </div>
            {key !== resultDot.length - 1 && (
              <div className='h-14 relative left-2 mt-1 mb-1' style={{ width: '0.063rem', background: '#E1E3E5' }} />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
