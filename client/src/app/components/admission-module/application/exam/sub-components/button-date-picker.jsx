import React, { useState } from 'react'
import clsx from 'clsx'
import { iccheck } from '../image'

const types = [
  '11:00 - 11:30 PM',
  '11:30 - 12:00 PM',
  '12:00 - 12:30 PM',
  '12:30 - 13:00 PM',
  '13:00 - 13:30 PM',
  '13:30 - 14:00 PM',
  '14:00 - 14:30 PM',
  '14:30 - 15:00 PM',
  '15:00 - 15:30 PM',
  '15:30 - 16:00 PM',
  '16:00 - 16:30 PM',
  '16:30 - 17:00 PM',
  '17:00 - 17:30 PM',
  '17:30 - 18:00 PM'
]

const ButtonDatePicker = ({ color }) => {
  const [active, setActive] = useState(types && types[0])

  return (
    <div className='inline-block'>
      {types.map((type) => (
        <button
          key={type}
          onClick={() => setActive(type)}
          className={clsx('time-select-button', type === active && 'time-select-button_active')}
          style={color ? { color: color, borderColor: color } : {}}
        >
          {type === active && (
            <img src={iccheck} style={{ position: 'absolute', left: '0.75rem', top: '0.25rem' }} alt='iccheck' />
          )}
          <p
            style={
              type === active
                ? { position: 'absolute', left: '2.5rem', top: '0.438rem' }
                : { position: 'absolute', left: '1.688rem', top: '0.438rem' }
            }
          >
            {type}
          </p>
        </button>
      ))}
    </div>
  )
}

export default ButtonDatePicker
