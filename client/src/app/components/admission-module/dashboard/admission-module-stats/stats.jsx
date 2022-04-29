import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import StatsItem from './admission-module-stats_item/stats-item'
import './stats.scss'

export default function Stats() {
  return (
    <ul className={clsx('stats grid-container__item--7')}>
      {data.map((item, key) => (
        <StatsItem key={key} num={item.num} title={item.title} textColor={item.textColor} />
      ))}
    </ul>
  )
}

const data = [
  { num: '21', title: 'Weekly Task', textColor: 'blue-800' },
  { num: '70', title: 'Completed', textColor: 'black' },
  { num: '70', title: 'On Time Follow up', textColor: 'green-600' },
  { num: '10', title: 'Reschduled', textColor: 'yellow-300' },
  { num: '15', title: 'Dealyed Tasks', textColor: 'red-500' },
  { num: '60', title: 'Emails Sent', textColor: 'green-600' }
]

Stats.propTypes = {
  /**  @param Type An array of objects.
   * @param Object Keys for objects - num: string, title: string, textColor: string
   * @param Example [
  { num: '21', title: 'Weekly Task', textColor: 'blue-800' },
  { num: '70', title: 'Completed', textColor: 'black' },
  { num: '70', title: 'On Time Follow up', textColor: 'green-600' },
  { num: '10', title: 'Reschduled', textColor: 'yellow-300' },
  { num: '15', title: 'Dealyed Tasks', textColor: 'red-500' },
  { num: '60', title: 'Emails Sent', textColor: 'green-600' }
]
   **/
  data: PropTypes.array
}
