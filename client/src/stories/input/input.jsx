import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import './input.scss'

const Input = ({
  type,
  label,
  name,
  labelFix,
  placeholder,
  error,
  value,
  customStyle,
  inputSize,
  disabled,
  textForError,
  onChange
}) => {
  return (
    <React.Fragment>
      <div className='input'>
        <input
          disabled={disabled}
          value={value}
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className={clsx('input-styled', error ? `error` : ``, `input-size-${inputSize}`)}
          style={customStyle}
          autoComplete='off'
          required
        />
        <label htmlFor={name} className={`label ${labelFix}`}>
          {label}
        </label>
      </div>
      {error && <p style={{ color: '#ff4842', marginLeft: 10 }}>{textForError}</p>}
    </React.Fragment>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  textForError: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  customStyle: PropTypes.object,
  inputSize: PropTypes.string,
  onChange: PropTypes.func
}

Input.defaultProps = {
  type: 'text',
  label: 'Text Input',
  onChange: {},
  name: 'thatinput',
  placeholder: '',
  error: false,
  customStyle: {},
  inputSize: 'medium'
}

export default Input
