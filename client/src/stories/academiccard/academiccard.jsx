import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import './academiccard.scss'

export default function AcademicCard({ termName, dateStart, dateEnd, colorOption = 'green' }) {
  return (
    <div className={clsx('term-box', `term-box_${colorOption}`)}>
      <h4 className='term-box_name'>{termName}</h4>
      <p className='term-box_date'>
        {dateStart} - {dateEnd}
      </p>
    </div>
  )
}

AcademicCard.propTypes = {
  termName: PropTypes.string,
  dateStart: PropTypes.string,
  dateEnd: PropTypes.string,
  colorOption: PropTypes.string
}
