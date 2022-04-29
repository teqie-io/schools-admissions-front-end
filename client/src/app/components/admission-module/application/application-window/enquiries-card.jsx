import React from 'react'
import PropTypes from 'prop-types'

import { mainavatar } from '../../../../static/image'
import './application-window.scss'

export default function EnquiriesCard({ name, py, pattern, date }) {
  const styles = {
    blue: { color: '#404EED', background: '#EDF4FE' },
    red: { color: '#EB5757', background: ' #FFE9E8' },
    green: { color: '#229A16', background: 'rgba(84, 214, 44, 0.16)' }
  }

  const checkColor = () => {
    return pattern.search('New') !== -1 ? styles.green : pattern.search('Failed') !== -1 ? styles.red : styles.blue
  }

  return (
    <div className='enquiries-card'>
      <img className='rounded-full w-9 h-9' src={mainavatar} alt='' />
      <div className='flex ml-4'>
        <div>
          <h3>{name}</h3>
          <p className='enquiries-card_pattern' style={checkColor()}>
            {pattern}
          </p>
        </div>
        <div className='flex flex-col items-center ml-10 enquiries-card_date'>
          <h3>{py}</h3>
          <p className='text-second-gray mt-1.5'>{date}</p>
        </div>
      </div>
    </div>
  )
}

EnquiriesCard.propTypes = {
  name: PropTypes.string,
  py: PropTypes.string,
  pattern: PropTypes.string,
  date: PropTypes.string
}
