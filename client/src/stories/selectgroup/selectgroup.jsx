import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

import { selectGroup } from '../../app/entities/select-style'
import './selectgroup.scss'

const SelectGroup = ({ title, options, className, labelFix }) => {
  return (
    <div className={`select-group ${className}`}>
      <span style={labelFix}>{title}</span>
      <Select options={options} styles={selectGroup} />
    </div>
  )
}

SelectGroup.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array,
  labelFix: PropTypes.object
}

export default SelectGroup
