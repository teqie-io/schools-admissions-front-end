import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import BloomHeader from '@app/components/bloomingdale/header/header'
import BloomLinks from '@app/components/bloomingdale/links/links'
import { bloomSelect } from '@entities/select-style'
import { backarrow, buttoncheck, nextarrow, done, cancel } from '../image'
import './form.scss'

export default function BloomForm() {
  const [nextStep, setNextStep] = useState(false)

  const appStyle = document.getElementsByClassName('app')

  useEffect(() => {
    if (appStyle && appStyle[0]) appStyle[0].style.overflowX = 'hidden'
  }, [])

  return (
    <div>
      <BloomHeader />
      {!nextStep ? (
        <div className='w-screen flex items-start mt-24 pl-20 pr-20'>
          <button className='w-6 h-8 none-after cursor-pointer mr-20 mt-5'>
            <img src={backarrow} className='w-4 h-4' />
          </button>
          <div className='flex w-full justify-between'>
            <div className='mt-5'>
              <h1 className='font-semibold text-lg mb-10' style={{ color: '#2b2c34' }}>
                Enquiry Form
              </h1>
              {data.map((item, key) => (
                <ContentGroup title={item.title} type={item.type} data={item.data} key={key} />
              ))}
            </div>
            <BloomLinks />
          </div>
        </div>
      ) : (
        <div className='w-screen flex items-start mt-24 mb-24 pl-20 pr-20'>
          <button className='w-6 h-8 none-after cursor-pointer mr-20 mt-5'>
            <img src={backarrow} className='w-4 h-4' />
          </button>
          <div className='flex w-full justify-between'>
            <div className='mt-5'>
              <h1 className='font-semibold text-lg mb-10' style={{ color: '#2b2c34' }}>
                2. Parent/ Guardian Details
              </h1>
              {parentData.map((item, key) => (
                <ContentGroup title={item.title} type={item.type} data={item.data} key={key} />
              ))}
            </div>
            <BloomLinks />
          </div>
        </div>
      )}
      {!nextStep && (
        <div className='w-full h-10 flex items-center justify-center mt-5 mb-10'>
          <button className='group w-10 h-10 cursor-pointer' onClick={() => setNextStep(true)}>
            <img src={nextarrow} className='w-6 h-7 transform transition-all group-hover:translate-y-2' />
          </button>
        </div>
      )}
      {nextStep && (
        <div
          className='fixed h-20 w-full bottom-0 flex items-center justify-end pr-6'
          style={{ background: '#f5f4f7' }}
        >
          <div className='flex'>
            <button className='none-after mr-4 font-semibold flex items-center' style={{ color: '#ff0038' }}>
              <img src={cancel} className='w-3 h-3 mr-1.5' />
              Cancel
            </button>
            <NavLink to='/bloomingdale-dashboard'>
              <button className='none-after mr-4 font-semibold flex items-center' style={{ color: '#00a86b' }}>
                <img src={done} className='w-3 h-3 mr-1.5' />
                Submit
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  )
}

const ContentGroup = ({ title, type = 'input', data = null }) => {
  const [typeButton, setTypeButton] = useState(data && data[0])

  return (
    <div className='mb-4'>
      <p className='mb-2 font-semibold' style={{ color: '#2b2c34' }}>
        {title}
      </p>
      {type === 'input' && <input type='text' className='group-input' />}
      {type === 'button' && (
        <div className='flex items-center'>
          {data.map((item, key) => {
            return (
              <button
                className={clsx('group-button none-after', typeButton === item && 'group-button--active')}
                onClick={() => setTypeButton(item)}
                key={key}
              >
                {item}
                {typeButton === item && <img src={buttoncheck} className='absolute w-3.5 h-3.5 top-1 right-1' />}
              </button>
            )
          })}
        </div>
      )}
      {type === 'select' && <Select styles={bloomSelect} options={data} />}
    </div>
  )
}

const data = [
  { title: 'First Name' },
  { title: 'Middle Name' },
  { title: 'Last Name' },
  { title: 'Gender', type: 'button', data: ['Male', 'Female'] },
  {
    title: 'Anticipated Grade of Entry',
    type: 'select',
    data: [
      { value: 'one', label: 'first option' },
      { value: 'two', label: 'second option' },
      { value: 'three', label: 'third option' }
    ]
  },
  { title: 'Campus', type: 'button', data: ['BIS Galileo', 'BIS Village Campus'] },
  { title: 'Language' },
  {
    title: 'Nationality',
    type: 'select',
    data: [
      { value: 'one', label: 'first option' },
      { value: 'two', label: 'second option' },
      { value: 'three', label: 'third option' }
    ]
  }
]

const parentData = [
  { title: 'First Name' },
  { title: 'Middle Name' },
  { title: 'Last Name' },
  { title: 'Gender', type: 'button', data: ['Male', 'Female'] },
  {
    title: 'Relationship with applicant',
    type: 'select',
    data: [
      { value: 'one', label: 'first option' },
      { value: 'two', label: 'second option' },
      { value: 'three', label: 'third option' }
    ]
  },
  { title: 'Mobile Number' },
  { title: 'Employer/ Company' }
]
