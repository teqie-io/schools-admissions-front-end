import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { mainavatar, phone, ellipsis } from '../../../../static/image'
import './appointments.scss'

const statusRender = (status) => {
  const kebab =
    status &&
    status
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/\s+/g, '-')
      .toLowerCase()

  return (
    <span className={clsx('appointments-user__status', status && `appointments-user__status_${kebab}`)}>{status}</span>
  )
}

export default function AppointmentsUser({ userName, date, status }) {
  return (
    <div className='appointments-user'>
      <div className='appointments-user-info'>
        <div className='appointments-user__img-wrapper'>
          <img src={mainavatar} alt='' className='appointments-user__img' />
        </div>
        <div>
          <p className='appointments-user__name'>{userName}</p>
          <span className='appointments-user__date'>{date}</span>
          {statusRender(status)}
        </div>
      </div>
      <div className='appointments-user-actions'>
        <button className='appointments-user-actions__call-btn'>
          <img src={phone} alt='phone' />
        </button>
        <button className='appointments-user-actions__submenu-btn'>
          <img src={ellipsis} alt='ellipsis' />
        </button>
      </div>
    </div>
  )
}

AppointmentsUser.propTypes = {
  userName: PropTypes.string,
  date: PropTypes.string,
  status: PropTypes.string
}
