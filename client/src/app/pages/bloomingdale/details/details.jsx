import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import clsx from 'clsx'

import BloomCrumbs from '@app/components/bloomingdale/crumbs/crumbs'
import BloomHeader from '@app/components/bloomingdale/header/header'
import { bloomDetailsSelect } from '@entities/select-style'
import { backarrow, buttoncheck, details } from '../image'
import './details.scss'
import { NavLink } from 'react-router-dom'

const dataLinks = [
  { name: 'Applicant Details', active: 'Active' },
  { name: 'Application Fee', active: 'Unactive' },
  { name: 'Child Assessment', active: 'Unactive' },
  { name: 'Principial Approval', active: 'Unactive' },
  { name: 'Documents', active: 'Unactive' },
  { name: 'Finance Aproval', active: 'Unactive' }
]

export default function BloomDetails() {
  const [parentRender, addParentRender] = useState([0])
  const [imgPreview, setImgPreview] = useState(false)

  const changeImageHandler = (e) => {
    let selected = e.target.files
    if (selected && selected[0]) {
      let reader = new FileReader()

      reader.onload = (e) => {
        setImgPreview(e.target.result)
      }
      reader.readAsDataURL(selected[0])
    }
  }

  const appStyle = document.getElementsByClassName('app')

  useEffect(() => {
    if (appStyle && appStyle[0]) appStyle[0].style.overflowX = 'hidden'
  }, [])

  return (
    <div>
      <BloomHeader />
      <BloomCrumbs data={dataLinks} />
      <div className='w-screen flex items-start mt-12 pl-20 pr-20'>
        <button className='w-6 h-8 none-after cursor-pointer mr-20 mt-5'>
          <img src={backarrow} className='w-4 h-4' />
        </button>
        <div className='flex w-full justify-between'>
          <div className='mt-5'>
            <h1 className='font-semibold text-lg mb-10 text-main-blue pl-5'>Apply Now</h1>
            <div
              className='flex items-center pl-5 font-semibold mb-4'
              style={{ width: '26.25rem', height: '3rem', background: '#f5fcf9' }}
            >
              Student Information
            </div>
            <div className='mb-4 pl-3'>
              <p className='mb-2 font-semibold' style={{ color: '#2b2c34' }}>
                Photo
              </p>
              <div className='w-16'>
                <label htmlFor='image-upload' className='cursor-pointer'>
                  {imgPreview && (
                    <img
                      className='w-16 h-16 rounded-full border border-main-blue border-dashed'
                      src={imgPreview}
                      alt='uploaded image'
                    />
                  )}
                  {!imgPreview && (
                    <div className='flex items-center justify-center w-16 h-16 border border-main-blue border-dashed rounded-full text-main-blue text-xl'>
                      <p className='bg-main-blue rounded-full text-white w-4 flex items-center justify-center h-4 text-sm'>
                        +
                      </p>
                    </div>
                  )}
                </label>
                <input
                  type='file'
                  id='image-upload'
                  name='image-upload'
                  className='hidden'
                  accept='image/*'
                  onChange={changeImageHandler}
                />
              </div>
            </div>
            {data.map((item, key) => (
              <ContentGroup title={item.title} type={item.type} data={item.data} key={key} />
            ))}

            {parentRender.map((item, key) => (
              <React.Fragment key={key}>
                <div
                  className='flex items-center pl-5 font-semibold mb-4'
                  style={{ width: '26.25rem', height: '3rem', background: '#f5fcf9' }}
                >
                  {parentRender.length > 1 && key + 1 + '. '}Parent/ Guardian Information
                </div>
                {parentData.map((item, key) => (
                  <ContentGroup title={item.title} type={item.type} data={item.data} key={key} />
                ))}
              </React.Fragment>
            ))}
            <button
              onClick={() => addParentRender([...parentRender, Math.random()])}
              className='mb-10 none-after flex items-center font-semibold text-sm'
              style={{ color: '#ababcd' }}
            >
              <Close />
              Add Parent/ Guadian Details
            </button>
          </div>
          <div className='pr-20 pt-40'>
            <img src={details} style={{ width: '28.125rem', height: '25rem' }} alt='persona' />
          </div>
        </div>
      </div>
      <div className='bloom-footer'>
        <button
          className='pl-3.5 pr-3.5 pt-1.5 pb-1.5 text-sm text-white font-semibold mr-3.5'
          style={{ background: '#00a86b' }}
        >
          Save
        </button>
        <NavLink to='/bloomingdale-form-more'>
          <button className='flex items-center bg-main-blue pl-3.5 pr-1.5 pt-1 pb-1 text-sm text-white font-semibold mr-3.5'>
            Next
            <Arrow />
          </button>
        </NavLink>
      </div>
    </div>
  )
}

const ContentGroup = ({ title, type = 'input', data = null }) => {
  const [typeButton, setTypeButton] = useState(data && data[0])

  return (
    <div className='mb-4 pl-3'>
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
      {type === 'select' && <Select styles={bloomDetailsSelect} options={data} />}
    </div>
  )
}

const data = [
  { title: 'First Name' },
  { title: 'Middle Name' },
  { title: 'Last Name' },
  { title: 'Gender', type: 'button', data: ['Male', 'Female'] },
  { title: 'Date of Birth' },
  {
    title: 'Aniticipated Grade of Entry',
    type: 'select',
    data: [
      { value: 'one', label: 'first option' },
      { value: 'two', label: 'second option' },
      { value: 'three', label: 'third option' }
    ]
  },
  { title: 'Current School' }
]

const parentData = [
  { title: 'Full Name' },
  { title: 'Gender', type: 'button', data: ['Male', 'Female'] },
  { title: 'Relationship with applicant' },
  { title: 'Mobile Number' },
  { title: 'Occupation' }
]

const Arrow = () => {
  return (
    <svg width='24' height='24' className='ml-1.5' viewBox='0 -5 24 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M8.55 2.5L7 4.05L14.95 12L7 19.95L8.55 21.5L18 12L8.55 2.5Z' fill='white' />
    </svg>
  )
}

const Close = () => {
  return (
    <svg
      width='20'
      className='mr-3 ml-3 transform rotate-45'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.66602 10C1.66602 5.39763 5.39698 1.66667 9.99935 1.66667C12.2095 1.66667 14.3291 2.54464 15.8919 4.10744C17.4547 5.67025 18.3327 7.78986 18.3327 10C18.3327 14.6024 14.6017 18.3333 9.99935 18.3333C5.39698 18.3333 1.66602 14.6024 1.66602 10ZM12.5042 11.6667C12.5042 11.4445 12.4154 11.2315 12.2577 11.075L11.1743 10L12.2577 8.925C12.5844 8.59823 12.5844 8.06844 12.2577 7.74167C11.9309 7.4149 11.4011 7.4149 11.0743 7.74167L9.99935 8.825L8.92435 7.74167C8.59758 7.4149 8.06778 7.4149 7.74101 7.74167C7.41425 8.06844 7.41425 8.59823 7.74101 8.925L8.82435 10L7.74101 11.075C7.58325 11.2315 7.49452 11.4445 7.49452 11.6667C7.49452 11.8889 7.58325 12.1019 7.74101 12.2583C7.89749 12.4161 8.11048 12.5048 8.33268 12.5048C8.55488 12.5048 8.76788 12.4161 8.92435 12.2583L9.99935 11.175L11.0743 12.2583C11.2308 12.4161 11.4438 12.5048 11.666 12.5048C11.8882 12.5048 12.1012 12.4161 12.2577 12.2583C12.4154 12.1019 12.5042 11.8889 12.5042 11.6667Z'
        fill='#ababcd'
      />
    </svg>
  )
}
