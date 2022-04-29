import React, { useState } from 'react'
import Select from 'react-select'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { selectStyle, selectStyleBig } from '../../../entities/select-style'
import './principial-card.scss'

export default function PrincipialCard({
  value,
  type,
  discountValue,
  discountChange,
  approvalChange,
  aboveChange,
  approvalOptions,
  aboveOptions
}) {
  const options = [
    { value: 'Precentage', label: 'Precentage' },
    { value: 'Fixed Amount', label: 'Fixed Amount' }
  ]

  const options2 = [{ value: 'xyz', label: 'xyz aproval process' }]

  const options3 = [{ value: 'Auto reject', label: 'Auto reject' }]

  const [inputValue, setInputValue] = useState(value === 'Precentage' ? 5 : 2000)
  const [discountType, setDiscountType] = useState(value === 'Precentage' ? 'Precentage' : 'Fixed Amount')

  return type !== 'button' ? (
    <div className='principial-card'>
      <div className='principial-card-row mb-2'>
        <span className='principial-card-row_fix'>Discount Type</span>
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
      <div className='principial-card-row mb-3'>
        <span>Maximum Value</span>
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
      <div className='principial-card-row mb-0.5'>
        <span className='principial-card-row_fix'>Approval Type</span>
        <Select
          onChange={approvalChange}
          styles={selectStyleBig}
          options={approvalOptions ? approvalOptions : options2}
          defaultValue={approvalOptions ? approvalOptions[0] : options2[0]}
        />
      </div>
      <div className='principial-card-row'>
        <span className='principial-card-row_fix'>Above limit option</span>
        <Select
          onChange={aboveChange}
          styles={selectStyle}
          options={aboveOptions ? aboveOptions : options3}
          defaultValue={aboveOptions ? aboveOptions[0] : options3[0]}
        />
      </div>
    </div>
  ) : (
    <div className='principial-card principial-card-add'>
      <span className='text-3xl'>+</span>
      <span className='text-base'>Add Principial Card</span>
    </div>
  )
}

PrincipialCard.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  discountValue: PropTypes.string,
  discountChange: PropTypes.func,
  approvalChange: PropTypes.func,
  aboveChange: PropTypes.func,
  approvalOptions: PropTypes.array,
  aboveOptions: PropTypes.array
}
