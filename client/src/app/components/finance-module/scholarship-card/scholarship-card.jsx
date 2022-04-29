import React, { useState } from 'react'
import clsx from 'clsx'
import Select from 'react-select'
import PropTypes from 'prop-types'

import { ToggleButton } from '../../../../stories'
import { selectStyle } from '../../../entities/select-style'
import './scholarship-card.scss'

export default function ScholarshipCard({
  title,
  value,
  clickable,
  discountValue,
  discountChange,
  stackValue,
  stackChange
}) {
  const styles = {
    toggle: { marginLeft: 10, marginBottom: 2 },
    select: selectStyle
  }

  const [parentView, setParentView] = useState(title === 'Parent Discount' ? true : false)
  const [discountView, setDiscountView] = useState(false)
  const [inputValue, setInputValue] = useState(value === 'Precentage' ? 5 : 2000)
  const [inputValueDiscount, setInputValueDiscount] = useState(10)
  const [discountType, setDiscountType] = useState(value === 'Precentage' ? 'Precentage' : 'Fixed Amount')

  const options = [
    { value: 'Precentage', label: 'Precentage' },
    { value: 'Fixed Amount', label: 'Fixed Amount' }
  ]

  return title ? (
    <div className='scholarship-card'>
      <div className='scholarship-card_row font-extrabold text-lg'>
        <p className='relative bottom-0.5'>{title}</p>
        <ToggleButton
          value={parentView}
          onChange={() => {
            setDiscountView(false)
            setParentView(!parentView)
          }}
          inputSize='smalling'
          customStyle={styles.toggle}
        />
      </div>
      <div
        className={clsx(
          'scholarship-card_row text-gray-500 justify-between',
          parentView && clickable === true ? ' card-row_active' : ' card-row'
        )}
      >
        Discount Type
        <Select
          defaultValue={title === 'Parent Discount' ? options[1] : options[0]}
          styles={styles.select}
          options={options}
          onChange={(e) => {
            e.value === 'Precentage' ? setInputValue(5) : setInputValue(2000)
            setDiscountType(e.value)
          }}
        />
      </div>
      <div
        className={clsx(
          'scholarship-card_row text-gray-500 justify-between',
          parentView && clickable === true ? ' card-row_active' : ' card-row'
        )}
      >
        Value
        <div className={clsx('flex relative', discountType !== 'Precentage' ? 'mr-8' : 'mr-15')}>
          <label className='absolute mr-6'>{discountType !== 'Precentage' && '₹'}</label>
          <input
            className={clsx('flex', discountType !== 'Precentage' ? 'w-20  text-left pl-3.5' : 'w-12 text-right pr-5')}
            value={discountValue ? discountValue : inputValue}
            onChange={(e) => {
              discountChange ? discountChange(e.target.value) : setInputValue(e.target.value)
            }}
            type='number'
          />
          <label className='absolute ml-8'>{discountType === 'Precentage' && '%'}</label>
        </div>
      </div>
      <div className='scholarship-card_row text-gray-500'>
        Stackable
        <span className='flex'>
          <ToggleButton
            inputSize='smalling'
            value={discountView}
            onChange={() => {
              setParentView(parentView === false ? true : parentView)
              setDiscountView(!discountView)
            }}
            customStyle={styles.toggle}
          />
        </span>
      </div>

      <div
        className={clsx(
          'scholarship-card_row text-gray-500',
          discountView && clickable === true ? 'card-row_active' : 'card-row'
        )}
      >
        Maximum Stack
        <input
          className={clsx('flex', 'w-12 text-center stack')}
          value={stackValue ? stackValue : inputValueDiscount}
          onChange={(e) => {
            stackChange ? stackChange(e.target.value) : setInputValueDiscount(e.target.value)
          }}
          type='number'
        />
      </div>
    </div>
  ) : (
    <div className='scholarship-card scholarship-card-add'>
      <span className='text-3xl'>+</span>
      <span className='text-base'>Add Parent Card</span>
    </div>
  )
}

ScholarshipCard.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  clickable: PropTypes.bool,
  discountValue: PropTypes.string,
  discountChange: PropTypes.func,
  stackValue: PropTypes.string,
  stackChange: PropTypes.func
}
