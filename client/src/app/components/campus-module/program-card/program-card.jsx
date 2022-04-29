import React, { useState } from 'react'
import Bounce from 'react-reveal/Bounce'
import PropTypes from 'prop-types'

import { Checkbox } from '@stories'

export default function ProgramCard({ preName, clsName }) {
  const [checkOne, setCheckOne] = useState(true)
  const [checkTwo, setCheckTwo] = useState(false)

  return (
    <tr>
      <td>
        <div className='pre-classes'>
          <h3>{preName}</h3>
          <h4>
            <span>Age Group </span>2-3.5 Years
          </h4>
        </div>
      </td>
      <td>
        <div className='classes'>
          <div className='classes_row'>
            <Checkbox value={checkOne} onChange={() => setCheckOne(!checkOne)} />
            {checkOne && (
              <Bounce duration={500}>
                <h3>Sections</h3>
              </Bounce>
            )}
            {checkOne && (
              <Bounce duration={500}>
                <h4>2</h4>
              </Bounce>
            )}
          </div>
          {checkOne && (
            <Bounce duration={500}>
              <div className='classes_row'>
                <h3>Class Name </h3>
                <h4>{clsName}</h4>
                <h3>Students/Section</h3>
                <h4>20</h4>
              </div>
            </Bounce>
          )}
        </div>
      </td>
      <td>
        <div className='classes'>
          <div className='classes_row'>
            <Checkbox value={true} disabled={true} />
          </div>
        </div>
      </td>
      <td>
        <div className='classes'>
          <div className='classes_row'>
            <Checkbox value={true} disabled={true} />
          </div>
        </div>
      </td>
      <td>
        <div className='classes'>
          <div className='classes_row'>
            <Checkbox value={true} disabled={true} />
          </div>
        </div>
      </td>
      <td>
        <div className='classes'>
          <div className='classes_row'>
            <Checkbox value={checkTwo} onChange={() => setCheckTwo(!checkTwo)} />
            {checkTwo && (
              <Bounce duration={500}>
                <h3>Sections</h3>
              </Bounce>
            )}
            {checkTwo && (
              <Bounce duration={500}>
                <h4>2</h4>
              </Bounce>
            )}
          </div>
          {checkTwo && (
            <Bounce duration={500}>
              <div className='classes_row'>
                <h3>Class Name </h3>
                <h4>Playgroup</h4>
                <h3>Students/Section</h3>
                <h4>20</h4>
              </div>
            </Bounce>
          )}
        </div>
      </td>
    </tr>
  )
}

ProgramCard.propTypes = {
  preName: PropTypes.string,
  clsName: PropTypes.string
}
