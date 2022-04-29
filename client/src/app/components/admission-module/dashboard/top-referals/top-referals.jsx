import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { mainavatar } from '../../../../static/image'
import { TopReferalsItem } from '../../../../../stories'
import './top-referals.scss'

export default function TopReferals({ burger }) {
  return (
    <div className={clsx('top-referals grid-container__item--6', burger ? 'top-referals_open' : 'top-referals_closed')}>
      <div className='top-referals-container'>
        <h2 className={clsx('top-referals-title', burger ? 'top-referals-title_open' : 'top-referals-title_closed')}>
          Top Referals
        </h2>
        <ul className={clsx('top-referals-list', burger ? 'top-referals-list_open' : 'top-referals-list_closed')}>
          <TopReferalsItem name='Jacqueline Likoki' image={mainavatar} achievement='5 Conversions' hexColor='#008060' />
          <TopReferalsItem name='Jacqueline Likoki' image={mainavatar} achievement='3 Conversions' hexColor='#FF4343' />
          <TopReferalsItem name='Jacqueline Likoki' image={mainavatar} achievement='12 Enquires' hexColor='#0E4DA4' />
        </ul>
      </div>
    </div>
  )
}

TopReferals.propTypes = {
  /**  @param Type An array of objects.
   * @param Object Keys for objects - name: string, image: string, achievement: string, hexColor: string
   * @param hexColor Key variations - #008060, #FF4343, #0E4DA4
   * @param Example [
  { name: 'Jacqueline Likoki', image: 'https://localhost:8080/...', achievement: '5 Conversions', hexColor: '#008060' },
  { name: 'Jacqueline Likoki', image: 'https://localhost:8080/...', achievement: '3 Conversions', hexColor: '#FF4343' },
  { name: 'Jacqueline Likoki', image: 'https://localhost:8080/...', achievement: '12 Enquires', hexColor: '#0E4DA4' }
]
   **/
  data: PropTypes.array
}
