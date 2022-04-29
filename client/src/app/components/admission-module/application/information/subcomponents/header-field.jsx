import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { ToggleButton } from '../../../../../../stories'

const HeaderField = ({ types, active, setActive, className }) => {
  const [value, setValue] = useState(false)

  return (
    <div className={`header-field ${className}`}>
      <div className='flex'>
        {types.map((type) =>
          type.search('Add') === -1 ? (
            <button
              key={type}
              style={{ fontSize: 14 }}
              onClick={() => setActive(type)}
              className={clsx('header-field-button', type === active && 'header-field-button_active')}
            >
              <p>{type}</p>
            </button>
          ) : (
            <button
              key={type}
              disabled
              style={{ fontSize: 14 }}
              className={clsx('header-field-button', type === active && 'header-field-button_active')}
            >
              <p>{type}</p>
            </button>
          )
        )}
      </div>
      {types[0] === 'Address 1' && (
        <div className='flex items-center pb-2 text-sm mr-10'>
          <p className='mr-3'>Same as Guardian’s</p>
          <ToggleButton inputSize='small' value={value} onChange={() => setValue(!value)} />
        </div>
      )}
    </div>
  )
}

export default HeaderField

HeaderField.propTypes = {
  types: PropTypes.array,
  active: PropTypes.string,
  setActive: PropTypes.func,
  className: PropTypes.string
}
