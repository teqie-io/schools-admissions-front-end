import React from 'react'
import PropTypes from 'prop-types'

import DataWidget from '../data-widget/data-widget.jsx'

export default function TotalCards() {
  return (
    <div className='flex relative justify-between right-1.5 grid-container__item--1'>
      <DataWidget title='Total Enquiries' count='1,246' percents='2,6' />
      <DataWidget title='Total Enrolment' count='1,567' percents='4,6' />
      <DataWidget title='Total Enrolment' count='1,567' percents='4,6' />
    </div>
  )
}

TotalCards.propTypes = {
  /**  @param Type An array of objects.
   * @param Object Keys for objects - title: string, count: string, percents: string
   * @param Example [
  { title: 'Total Enquiries', count: '1,246', percents: '2,6' },
  { title: 'Total Enrolment', count: '1,567', percents: '4,6' },
  { title: 'Total Enrolment', count: '1,567', percents: '4,6' }
]
   **/
  data: PropTypes.array
}
