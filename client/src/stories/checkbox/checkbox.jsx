import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './checkbox.scss'

const Checkbox = ({
  value,
  onChange,
  customClass,
  disabled,
  color,
  group = false,
  groupTitle = 'group title',
  styleTitle,
  classTitle
}) => {
  const [checkedValue, setCheckedValue] = useState(value)

  return disabled === true ? (
    <label className={clsx('pure-material-checkbox_non', customClass)}>
      <input type='checkbox' checked={value} onChange={onChange} />
      <span></span>
    </label>
  ) : (
    <div className={group ? 'flex items-center' : ''}>
      <label
        className={clsx(color === 'green' ? 'pure-material-checkbox_green' : 'pure-material-checkbox', customClass)}
      >
        <input type='checkbox' checked={value} onChange={onChange} />
        <span></span>
      </label>
      {group && (
        <p className={classTitle} style={styleTitle}>
          {groupTitle}
        </p>
      )}
    </div>
  )
}

Checkbox.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  groupTitle: PropTypes.string,
  classTitle: PropTypes.string,
  styleTitle: PropTypes.object,
  group: PropTypes.bool
}

Checkbox.defaultProps = {
  onChange: (e) => setCheckedValue(e.target.checked),
  disabled: false
}

export default Checkbox
