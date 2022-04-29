import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

export default function HeaderTabs({
  types,
  setTypeState,
  typeState,
  customStyle,
  customClass,
  activeClass,
  icon,
  iconClass,
  iconStyle
}) {
  const [typeDeafult, setTypeDefaults] = useState(types && types[0])

  return types.map((type, key) => (
    <button
      className={clsx(
        ' pt-1 pb-4 font-medium mr-4 border-b-2 transition-all none-after',
        (typeState || typeDeafult) === type ? activeClass || 'border-main-blue' : 'border-white',
        customClass
      )}
      onClick={setTypeState ? () => setTypeState(type) : () => setTypeDefaults(type)}
      key={key}
      style={customStyle}
    >
      {icon && <img src={icon} className={clsx('mr-2', iconClass)} style={iconStyle} />}
      {type}
    </button>
  ))
}

HeaderTabs.propTypes = {
  types: PropTypes.array,
  setTypeState: PropTypes.func,
  typeState: PropTypes.string,
  customStyle: PropTypes.object,
  customClass: PropTypes.string,
  activeClass: PropTypes.string,
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  iconStyle: PropTypes.object
}
