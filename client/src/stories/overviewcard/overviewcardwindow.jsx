import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const OverviewCardWindow = ({ title, number }) => {
  const styles = {
    window: { background: '#F0F0F0' },
    blue: { color: '#1890FF' },
    red: { color: '#FF4343' },
    green: { color: '#00AB55' }
  }

  return (
    <div
      className={clsx('overview-card-window', title === 'Failed' && 'mr-5')}
      style={title === 'Closed' || title === 'Failed' ? styles.window : {}}
    >
      <p className='mb-2 text-xs text-main-black'>{title}</p>
      <p
        className='mt-2 text-3xl'
        style={title === 'Enquiries' ? styles.blue : title === 'Failed' ? styles.red : styles.green}
      >
        {number}
      </p>
    </div>
  )
}

OverviewCardWindow.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string
}

export default OverviewCardWindow
