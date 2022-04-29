import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import dynamics from '../../../../static/image/dynamics.svg'
import brokenArrow from '../../../../static/image/brokenArrow.svg'
import './data-widget.scss'

export default function DataWidget({ title, percents, count }) {
  return (
    <div className={clsx('data-widget')}>
      <div className='data-widget-infp'>
        <p className='data-widget__title'>{title}</p>
        <p className='data-widget__percents'>
          <img src={brokenArrow} alt='' />
          {percents > 0 ? `-${percents}` : `+${percents}`}%
        </p>
        <p className='data-widget__count'>{count}</p>
      </div>
      <div className='data-widget__img-wrapper'>
        <img src={dynamics} alt='' className='data-widget__img' />
      </div>
    </div>
  )
}

DataWidget.propTypes = {
  title: PropTypes.string,
  percents: PropTypes.string,
  count: PropTypes.string,
  burger: PropTypes.bool
}
