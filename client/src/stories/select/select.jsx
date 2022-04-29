import React, { useState } from 'react'
import propTypes from 'prop-types'
import clsx from 'clsx'

import './select.scss'
import { doublearrow, arrow } from '../../app/static/image'

const Select = ({
  title,
  optionsArray,
  selected,
  setSelected,
  className,
  titleClassName,
  openSelect,
  closedSelect,
  selectSize
}) => {
  return (
    <div className={clsx('select', className, `select-${selectSize}`, openSelect && `select-${selectSize}-focus`)}>
      <div
        className={clsx('select-btn', openSelect && `select-btn-${selectSize}-active`, `select-btn-${selectSize}`)}
        onClick={closedSelect}
      >
        <div className={clsx('select-title', titleClassName)}>{title}</div>
        <span className='select-value'>{selected}</span>
        <img className='select-icon' alt='' src={selectSize === 'large' ? doublearrow : arrow} />
      </div>
      {openSelect && (
        <ul className={clsx('select-content', `select-content-${selectSize}`)}>
          {optionsArray.map((name, index) => {
            return (
              <li
                className='select-item'
                key={index + name}
                onClick={() => {
                  setSelected(name)
                  closedSelect()
                }}
              >
                {name}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

Select.propTypes = {
  title: propTypes.string,
  optionsArray: propTypes.array
}

Select.defaultProps = {
  selectSize: 'large'
}

export default Select
