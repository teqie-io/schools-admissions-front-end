import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const CardContainer = ({ children, shadowType, customClass, customStyle }) => {
  return (
    <div className={clsx('rounded-lg p-2.5', `shadow-${shadowType}`, customClass)} style={customStyle}>
      {children}
    </div>
  )
}

export default CardContainer

CardContainer.propTypes = {
  children: PropTypes.element,
  shadowType: PropTypes.string,
  customClass: PropTypes.string,
  customStyle: PropTypes.object
}

CardContainer.defaultProps = {
  shadowType: 'main-card',
  customStyle: { width: '15rem', height: '6rem' }
}
