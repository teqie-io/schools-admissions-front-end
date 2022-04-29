import React from 'react'
import PropTypes from 'prop-types'

import './panelcard.scss'

export default function PanelCard({ meetPeople, imgPeople, meetDate }) {
  return (
    <div className='maincard'>
      <div className='text-sm font-semibold flex items-center mb-1'>
        Meeting with{' '}
        <span className='mr-2 ml-2' style={{ color: '#0C53B7' }}>
          {meetPeople}{' '}
        </span>{' '}
        by
        <img className='w-5 h-5 ml-2' src={imgPeople} />
      </div>
      <p className='text-xs text-second-gray mt-1'>{meetDate}</p>
    </div>
  )
}

PanelCard.propTypes = {
  meetPeople: PropTypes.string,
  imgPeople: PropTypes.string,
  meetDate: PropTypes.string
}
