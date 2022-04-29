import React from 'react'
import PropTypes from 'prop-types'

import { phstudent } from '../../app/static/image'
import './gradecard.scss'

export default function GradeCard({ years, perSection, sections }) {
  const styles = {
    study: { color: '#404EED' },
    playgroup: { textTransform: 'uppercase' },
    section: { color: '#919eab' },
    yrs: { top: 1 }
  }

  return (
    <div className='prod-card-section'>
      <div className='prod-card-section_text'>
        <h5 style={styles.playgroup}>playgroup</h5>
        <p className='cursor-pointer' style={styles.study}>
          <img src={phstudent} alt='study' />
          {perSection} per Section
        </p>
      </div>
      <div className='prod-card-section_text'>
        <p className='relative' style={styles.section}>
          {sections} Section
        </p>
        <p className='relative' style={styles.yrs}>
          {years}
        </p>
      </div>
    </div>
  )
}

GradeCard.propTypes = {
  years: PropTypes.string,
  perSection: PropTypes.string,
  sections: PropTypes.string
}
