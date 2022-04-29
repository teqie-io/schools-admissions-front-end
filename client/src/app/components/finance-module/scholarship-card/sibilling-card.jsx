import React, { useState } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { selectStyle } from '../../../entities/select-style'
import './sibilling-card.scss'

export default function SibillingCard({ title, value, discountValue, discountChange }) {
  const options = [
    { value: 'Precentage', label: 'Precentage' },
    { value: 'Fixed Amount', label: 'Fixed Amount' }
  ]

  const [inputValue, setInputValue] = useState(value === 'Precentage' ? 5 : 2000)
  const [discountType, setDiscountType] = useState(value === 'Precentage' ? 'Precentage' : 'Fixed Amount')

  return title ? (
    <div className='sibilling-card'>
      <h2 className='font-extrabold text-lg mb-4'>{title}</h2>
      <div className='sibilling-card-row mb-2'>
        <span>Discount Type</span>
        <span className='mr-14'>Value</span>
      </div>
      <div className='sibilling-card-row relative sibilling-card-fix'>
        <Select
          defaultValue={options[0]}
          styles={selectStyle}
          options={options}
          onChange={(e) => {
            e.value === 'Precentage' ? setInputValue(5) : setInputValue(2000)
            setDiscountType(e.value)
          }}
        />
        <div
          className={clsx(
            'flex items-center sibilling-card-input',
            discountType !== 'Precentage' ? 'relative left-3' : 'relative right-4'
          )}
        >
          <label className='absolute mr-6'>{discountType !== 'Precentage' && '₹'}</label>
          <input
            className={clsx('flex', discountType !== 'Precentage' ? 'w-20  text-left pl-3.5' : 'w-12 text-right pr-5')}
            value={discountValue ? discountValue : inputValue}
            onChange={(e) => (discountChange ? discountChange(e.target.value) : setInputValue(e.target.value))}
            type='number'
          />
          <label className='absolute ml-8'>{discountType === 'Precentage' && '%'}</label>
        </div>
      </div>
    </div>
  ) : (
    <div className='sibilling-card sibilling-card-add'>
      <span className='text-3xl'>+</span>
      <span className='text-base'>Add Sibbling Card</span>
    </div>
  )
}

SibillingCard.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  discountValue: PropTypes.string,
  discountChange: PropTypes.func
}
