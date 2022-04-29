import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import './percent-card.scss'

export default function PercentCard({ percentage, num, title, variant, progressColor }) {
  const styles = {
    circle: buildStyles({
      textSize: '24px',
      pathTransitionDuration: 5,
      pathColor: `${progressColor}`,
      textColor: 'white',
      trailColor: 'rgba(226,226,226,0.2)',
      backgroundColor: '#3e98c7'
    })
  }

  return (
    <div className={clsx('percent-card', `percent-card_${variant}`)}>
      <div className='mr-1 ml-3 w-12 h-12'>
        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={styles.circle} />
      </div>
      <div className='w-50 ml-1 text-white'>
        <h1 className='font-bold text-lg'>{num}</h1>
        <p className='text-xs'>{title}</p>
      </div>
    </div>
  )
}

PercentCard.propTypes = {
  percentage: PropTypes.number,
  num: PropTypes.number,
  title: PropTypes.string,
  variant: PropTypes.string,
  progressColor: PropTypes.string
}

PercentCard.defaultProps = {
  percentage: 25.5,
  num: 91,
  title: 'My Conversions'
}
