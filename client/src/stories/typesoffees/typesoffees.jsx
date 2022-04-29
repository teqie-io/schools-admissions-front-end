import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { Checkbox } from '..'
import './typesoffees.scss'

const TypesOfFees = ({ title, sum, type, value }) => {
  const [check, setCheck] = useState(value || null)

  return (
    <div className={clsx('types-of-fees')}>
      <p className='types-of-fees_title'>{title}</p>
      {type === 'text' && <p className='types-of-fees_sum'>{sum}</p>}
      {type === 'checkbox' && (
        <div className='relative w-7 h-7'>
          <div className='absolute left-1'>
            <label className={clsx('pure-material-checkbox')}>
              <input type='checkbox' checked={check} style={{ top: -5 }} onChange={() => setCheck(!check)} />
              <span className='span-fix'></span>
            </label>
          </div>
        </div>
      )}
    </div>
  )
}

TypesOfFees.propTypes = {
  title: PropTypes.string,
  sum: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.bool
}

TypesOfFees.defaultProps = {
  title: 'Fee',
  sum: '0',
  type: 'text'
}

export default TypesOfFees
