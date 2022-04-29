import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import './toggle-button.scss'

const ToggleButton = ({ value, inputDisabled, name, inputSize, onChange, customStyle, bg }) => {
  return (
    <div className='toggle-button' style={customStyle}>
      <label htmlFor={name} className='toggle-button-label'>
        <div className={clsx('relative', inputDisabled ? 'disabled' : '')}>
          <input
            type='checkbox'
            id={name}
            className='sr-only'
            disabled={inputDisabled}
            onChange={onChange}
            checked={value}
          />
          <div className={clsx('full-area', `full-area-${inputSize}`)} style={bg ? { background: bg } : {}} />
          <div className={clsx('dot', `dot-${inputSize}`)} />
        </div>
      </label>
    </div>
  )
}

ToggleButton.propTypes = {
  value: PropTypes.bool,
  name: PropTypes.string,
  customStyle: PropTypes.object,
  onChange: PropTypes.func,
  inputDisabled: PropTypes.bool,
  inputSize: PropTypes.string
}

ToggleButton.defaultProps = {
  inputDisabled: false,
  inputSize: 'medium',
  value: false
}

export default ToggleButton
