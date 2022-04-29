import React from 'react'
import PropTypes from 'prop-types'

import './input.scss'

const BloomInput = ({ title, id, placeholder, type }) => {
  return (
    <div className='bloom-input'>
      <label htmlFor={id}>{title}</label>
      <input id={id} type={type} placeholder={placeholder} />
    </div>
  )
}

BloomInput.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string
}

BloomInput.defaultProps = {
  title: 'input text',
  placeholder: '',
  type: 'text'
}

export default BloomInput
