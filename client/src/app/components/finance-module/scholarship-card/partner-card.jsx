import React, { useState } from 'react'
import Select from 'react-select'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { selectStyle } from '../../../entities/select-style'
import './partner-card.scss'

export default function PartnerCard({ value, title, discountValue, discountChange, partnerValue, partnerChange }) {
  const options = [
    { value: 'Precentage', label: 'Precentage' },
    { value: 'Fixed Amount', label: 'Fixed Amount' }
  ]

  const [inputValue, setInputValue] = useState(value === 'Precentage' ? 5 : 2000)
  const [partnerName, setPartnerName] = useState(title)
  const [discountType, setDiscountType] = useState(value === 'Precentage' ? 'Precentage' : 'Fixed Amount')

  return title ? (
    <div className='partner-card'>
      <div className='partner-card-row mb-2'>
        <span>Partner Name</span>
        <div className='flex items-center partner-card-input '>
          <input
            className='flex w-28 text-center relative left-3'
            value={partnerValue ? partnerValue : partnerName}
            onChange={(e) => (partnerChange ? partnerChange(e.target.value) : setPartnerName(e.target.value))}
            type='text'
          />
        </div>
      </div>
      <div className='partner-card-row mb-2'>
        <span className='partner-card-row_fix'>Discount Type</span>
        <Select
          defaultValue={options[0]}
          styles={selectStyle}
          options={options}
          onChange={(e) => {
            e.value === 'Precentage' ? setInputValue(5) : setInputValue(2000)
            setDiscountType(e.value)
          }}
        />
      </div>
      <div className='partner-card-row'>
        <span>Value</span>
        <div className={clsx('flex relative', discountType !== 'Precentage' ? 'mr-5' : 'mr-14_fix')}>
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
    <div className='partner-card partner-card-add'>
      <span className='text-3xl'>+</span>
      <span className='text-base'>Add Partner Card</span>
    </div>
  )
}

PartnerCard.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  discountValue: PropTypes.string,
  discountChange: PropTypes.func,
  partnerValue: PropTypes.string,
  partnerChange: PropTypes.func
}
