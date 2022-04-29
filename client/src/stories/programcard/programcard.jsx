import React, { useState } from 'react'
import Bounce from 'react-reveal/Bounce'
import PropTypes from 'prop-types'

import './programcard.scss'
import { Checkbox } from '../'

export default function ProgramCard({ sections, nameSection, students }) {
  const [checkOne, setCheckOne] = useState(true)

  return (
    <div className='classes h-10'>
      <div className='classes_row'>
        <Checkbox value={checkOne} onChange={() => setCheckOne(!checkOne)} />
        {checkOne && (
          <Bounce duration={500}>
            <h3>Sections</h3>
          </Bounce>
        )}
        {checkOne && (
          <Bounce duration={500}>
            <h4>{sections}</h4>
          </Bounce>
        )}
      </div>
      {checkOne && (
        <Bounce duration={500}>
          <div className='classes_row'>
            <h3>Class Name</h3>
            <h4>{nameSection}</h4>
            <h3>Students/Section</h3>
            <h4>{students}</h4>
          </div>
        </Bounce>
      )}
    </div>
  )
}

ProgramCard.propTypes = {
  sections: PropTypes.string,
  nameSection: PropTypes.string,
  students: PropTypes.string
}
