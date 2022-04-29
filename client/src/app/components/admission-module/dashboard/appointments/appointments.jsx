import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import AppointmentsUser from './appointments-user.jsx'
import './appointments.scss'

export default function Appointments({ burger }) {
  return (
    <div className={clsx('appointments grid-container__item--4', burger ? 'appointments_open' : 'appointments_closed')}>
      <div className='appointments-title'>Appointments</div>
      <div className='appointments-row'>
        <AppointmentsUser userName='Jacqueline Likoki' date='3: 30 PM, Today' status='Confirmed' />
        <AppointmentsUser userName='Jacqueline Likoki' date='3: 30 PM, Today' status='Canceled' />
        <AppointmentsUser userName='Jacqueline Likoki' date='3: 30 PM, Tommorow' status='Call to confirm' />
        <AppointmentsUser userName='Jacqueline Likoki' date='3: 30 PM, Aug 14 2020' />
      </div>
    </div>
  )
}

Appointments.propTypes = {
  /**  @param Type An array of objects.
   * @param Object Keys for objects - userName: string, date: string, status: string, image: string
   * @param status Key variations - Confirmed, Canceled, Call to confirm, ''
   * @param Example [
  { userName: 'Jacqueline Likoki', date: '3: 30 PM, Today', status: 'Confirmed', image: 'https://localhost:8080/...' },
  { userName: 'Jacqueline Likoki', date: '3: 30 PM, Today', status: 'Canceled', image: 'https://localhost:8080/...' },
  { userName: 'Jacqueline Likoki', date: '3: 30 PM, Tommorow', status: 'Call to confirm', image: 'https://localhost:8080/...' },
  { userName: 'Jacqueline Likoki', date: '3: 30 PM, Aug 14 2020', status: '', image: 'https://localhost:8080/...' }
]
   **/
  data: PropTypes.array
}
