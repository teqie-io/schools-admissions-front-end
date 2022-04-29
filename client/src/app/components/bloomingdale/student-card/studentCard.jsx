import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { radio } from '@image'

import './studentCard.scss'
import { NavLink } from 'react-router-dom'

const StudentCard = ({ avatar, name, code, year, pending }) => {
  return (
    <div className={clsx('student-card', pending ? 'student-card--pending' : '')}>
      <img src={avatar} alt='student avatar' className='student-card_avatar' />
      <div className='student-card-info'>
        <h5 className='student-card-info_name'>{name}</h5>
        <div className='student-card-info-bottom'>
          <div className='student-card-info_code'>{code}</div>
          <div className='student-card-info_year'>ACD-{year}</div>
          <div className='student-card-info_status'>
            <img src={radio} alt='radio icon' />
            <span>{pending ? 'Pending' : 'Completed'}</span>
          </div>
        </div>
      </div>
      <NavLink to='/bloomingdale-dashboard' className='student-card_btn none-after'>
        <span />
      </NavLink>
    </div>
  )
}

StudentCard.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string,
  year: PropTypes.string,
  pending: PropTypes.bool
}

StudentCard.defaultProps = {
  avatar: 'https://place-hold.it/50x50',
  name: 'student name',
  code: 'XX0',
  year: '2000',
  pending: false
}

export default StudentCard
