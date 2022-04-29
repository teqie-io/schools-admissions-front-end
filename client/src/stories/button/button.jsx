import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import './button.scss'

const Button = ({
  text,
  leftIcon,
  icon,
  buttonStyle,
  onClick,
  buttonSize,
  buttonType,
  buttonDisabled,
  customStyle,
  className
}) => {
  return (
    <button
      className={clsx('btn', `btn-${buttonStyle}`, `btn-size-${buttonSize}`, className)}
      disabled={buttonDisabled}
      type={buttonType}
      style={customStyle}
      onClick={onClick}
    >
      {icon && <img src={icon} alt={icon} />}
      {text}
      {leftIcon && <img className='ml-4' src={leftIcon} alt={leftIcon} />}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  leftIcon: PropTypes.string,
  buttonStyle: PropTypes.string,
  buttonSize: PropTypes.string,
  buttonType: PropTypes.string,
  buttonDisabled: PropTypes.bool,
  customStyle: PropTypes.object,
  icon: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  text: 'main button',
  buttonStyle: 'contained',
  buttonSize: 'medium',
  buttonType: 'button',
  buttonDisabled: false,
  customStyle: {}
}

export default Button
