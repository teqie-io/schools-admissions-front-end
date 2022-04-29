import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import './stats-item.scss'

const StatsItem = ({ num, title, textColor }) => {
  return (
    <li className='stats-item'>
      <h2 className={clsx('stats-item_number', `text-${textColor}`)}>{num}</h2>
      <p className='stats-item_text'>{title}</p>
    </li>
  )
}

export default StatsItem

StatsItem.propTypes = {
  num: PropTypes.string,
  title: PropTypes.string,
  textColor: PropTypes.string
}
