import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import clsx from 'clsx'

import BloomHeader from '@app/components/bloomingdale/header/header'
import { Checkbox } from '@stories/'
import BloomCrumbs from '@app/components/bloomingdale/crumbs/crumbs'
import { bloomDetailsSelectMini } from '@entities/select-style'
import { backarrow, buttoncheck } from '../image'
import { NavLink } from 'react-router-dom'

const dataLinks = [
  { name: 'Applicant Details', active: 'Active' },
  { name: 'Application Fee', active: 'Unactive' },
  { name: 'Child Assessment', active: 'Unactive' },
  { name: 'Principial Approval', active: 'Unactive' },
  { name: 'Documents', active: 'Unactive' },
  { name: 'Finance Aproval', active: 'Unactive' }
]

export default function BloomFormMore() {
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
            <IdentityDetails />
            <SchoolHistory />
            <Language />
            <AdditionalSupport />
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
        <NavLink to='/bloomingdale-review'>
          <button className='flex items-center bg-main-blue pl-3.5 pr-1.5 pt-1 pb-1 text-sm text-white font-semibold mr-3.5'>
            Next
            <Arrow />
          </button>
        </NavLink>
      </div>
    </div>
  )
}

const AdditionalSupport = () => {
  const [buttons, setButtons] = useState({ expirience: false, recommended: false })
  const [checboxes, setCheckBoxes] = useState({
    psychological: false,
    physical: false,
    occupation: false,
    speech: false
  })
  return (
    <div>
      <div
        className='flex items-center pl-5 font-semibold mb-4'
        style={{ width: '26.25rem', height: '3rem', background: '#f5fcf9' }}
      >
        Additional Support
      </div>
      <div className='pl-3 mb-5 flex flex-col'>
        <div className='mb-5'>
          <p className='mb-2 font-semibold' style={{ color: '#2b2c34' }}>
            Did your child expirience any academic/ emotional/behavioural difficulties in school?
          </p>
          <div className='flex'>
            <button
              className={clsx('group-button none-after', buttons.expirience === true && 'group-button--active')}
              onClick={() => setButtons({ ...buttons, expirience: true })}
            >
              Yes
              {buttons.expirience === true && <img src={buttoncheck} className='absolute w-3.5 h-3.5 top-1 right-1' />}
            </button>
            <button
              className={clsx('group-button none-after', buttons.expirience === false && 'group-button--active')}
              onClick={() => setButtons({ ...buttons, expirience: false })}
            >
              No
              {buttons.expirience === false && <img src={buttoncheck} className='absolute w-3.5 h-3.5 top-1 right-1' />}
            </button>
          </div>
        </div>
        <div className='mb-5'>
          <p className='mb-2 font-semibold' style={{ color: '#2b2c34' }}>
            Did your child receive or been recommended for extra support in or outside school?
          </p>
          <div className='flex'>
            <button
              className={clsx('group-button none-after', buttons.recommended === true && 'group-button--active')}
              onClick={() => setButtons({ ...buttons, recommended: true })}
            >
              Yes
              {buttons.recommended === true && <img src={buttoncheck} className='absolute w-3.5 h-3.5 top-1 right-1' />}
            </button>
            <button
              className={clsx('group-button none-after', buttons.recommended === false && 'group-button--active')}
              onClick={() => setButtons({ ...buttons, recommended: false })}
            >
              No
              {buttons.recommended === false && (
                <img src={buttoncheck} className='absolute w-3.5 h-3.5 top-1 right-1' />
              )}
            </button>
          </div>
        </div>
        <div>
          <p className='mb-2 font-semibold' style={{ color: '#2b2c34' }}>
            Did you child ever receive a
          </p>
          <div className='flex items-center'>
            <Checkbox
              color='green'
              value={checboxes.psychological}
              onChange={() => setCheckBoxes({ ...checboxes, psychological: !checboxes.psychological })}
            />
            <p
              className='ml-1.5 font-semibold'
              style={checboxes.psychological ? { color: '#00a86b' } : { color: '#ababcd' }}
            >
              Psychological assessment
            </p>
          </div>
          <div className='flex items-center mt-3 mb-3'>
            <Checkbox
              color='green'
              value={checboxes.physical}
              onChange={() => setCheckBoxes({ ...checboxes, physical: !checboxes.physical })}
            />
            <p
              className='ml-1.5 font-semibold'
              style={checboxes.physical ? { color: '#00a86b' } : { color: '#ababcd' }}
            >
              Physical Therapy
            </p>
          </div>
          <div className='flex items-center mt-3 mb-3'>
            <Checkbox
              color='green'
              value={checboxes.occupation}
              onChange={() => setCheckBoxes({ ...checboxes, occupation: !checboxes.occupation })}
            />
            <p
              className='ml-1.5 font-semibold'
              style={checboxes.occupation ? { color: '#00a86b' } : { color: '#ababcd' }}
            >
              Occupation Therapy
            </p>
          </div>
          <div className='flex items-center'>
            <Checkbox
              color='green'
              value={checboxes.speech}
              onChange={() => setCheckBoxes({ ...checboxes, speech: !checboxes.speech })}
            />
            <p className='ml-1.5 font-semibold' style={checboxes.speech ? { color: '#00a86b' } : { color: '#ababcd' }}>
              Speech and Language Therapy
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Language = () => {
  const [cardRender, addCardRender] = useState([0])

  return (
    <div>
      <div
        className='flex items-center pl-5 font-semibold mb-4'
        style={{ width: '26.25rem', height: '3rem', background: '#f5fcf9' }}
      >
        Language
      </div>
      <div className='pl-3 mb-5 flex items-center'>
        <div>
          <p className='mb-2 font-semibold' style={{ color: '#2b2c34' }}>
            Mother Tongue
          </p>
          <input type='text' className='group-input' style={{ width: '16.5rem' }} />
        </div>
        <div className='ml-7 mr-7'>
          <p className='mb-2 font-semibold' style={{ color: '#2b2c34' }}>
            Language choice in previous school
          </p>
          <Select styles={bloomDetailsSelectMini} />
        </div>
      </div>
      {cardRender.map((item, key) => {
        return <LanguageCard key={key} />
      })}
      <button
        onClick={() => addCardRender([...cardRender, Math.random()])}
        className='mb-10 none-after flex items-center font-semibold text-sm'
        style={{ color: '#ababcd' }}
      >
        <Close />
        Add additional language
      </button>
    </div>
  )
}

const LanguageCard = () => {
  const [buttons, setButtons] = useState({ read: true, speak: false, write: false })
  return (
    <div className='mb-5 flex items-center'>
      <div className='ml-3 mr-7'>
        <p className='mb-2 font-semibold' style={{ color: '#2b2c34' }}>
          Additional Language
        </p>
        <Select styles={bloomDetailsSelectMini} />
      </div>
      <div className='flex mt-8'>
        <button
          className={clsx('group-button none-after', buttons.read === true && 'group-button--active')}
          onClick={() => setButtons({ ...buttons, read: !buttons.read })}
        >
          Read
          {buttons.read === true && <img src={buttoncheck} className='absolute w-3.5 h-3.5 top-1 right-1' />}
        </button>
        <button
          className={clsx('group-button none-after', buttons.speak === true && 'group-button--active')}
          onClick={() => setButtons({ ...buttons, speak: !buttons.speak })}
        >
          Speak
          {buttons.speak === true && <img src={buttoncheck} className='absolute w-3.5 h-3.5 top-1 right-1' />}
        </button>
        <button
          className={clsx('group-button none-after', buttons.write === true && 'group-button--active')}
          onClick={() => setButtons({ ...buttons, write: !buttons.write })}
        >
          Write
          {buttons.write === true && <img src={buttoncheck} className='absolute w-3.5 h-3.5 top-1 right-1' />}
        </button>
      </div>
    </div>
  )
}

const SchoolHistory = () => {
  const [cardRender, addCardRender] = useState([0])

  return (
    <div>
      <div
        className='flex items-center pl-5 font-semibold mb-4'
        style={{ width: '26.25rem', height: '3rem', background: '#f5fcf9' }}
      >
        School history
      </div>
      {cardRender.map((item, key) => (
        <div key={key} className='pl-3 mb-5 flex items-center'>
          <div>
            <p className='mb-2 font-semibold' style={{ color: '#2b2c34' }}>
              School Name
            </p>
            <input type='text' className='group-input' style={{ width: '16.5rem' }} />
          </div>
          <div className='ml-7 mr-7'>
            <p className='mb-2 font-semibold' style={{ color: '#2b2c34' }}>
              Grades Attended
            </p>
            <Select styles={bloomDetailsSelectMini} />
          </div>
        </div>
      ))}
      <button
        onClick={() => addCardRender([...cardRender, Math.random()])}
        className='mb-10 none-after flex items-center font-semibold text-sm'
        style={{ color: '#ababcd' }}
      >
        <Close />
        Add school
      </button>
    </div>
  )
}

const IdentityDetails = () => {
  const [imgPreview, setImgPreview] = useState(false)
  const [cardRender, addCardRender] = useState([0])

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

  return (
    <div>
      <div
        className='flex items-center pl-5 font-semibold mb-4'
        style={{ width: '26.25rem', height: '3rem', background: '#f5fcf9' }}
      >
        Identity Details
      </div>
      <div className='pl-3 mb-5'>
        <p className='mb-2 font-semibold' style={{ color: '#2b2c34' }}>
          Nationality
        </p>
        <input type='text' className='group-input' />
      </div>
      {cardRender.map((item, key) => (
        <React.Fragment key={key}>
          <div className='pl-3 mb-5 flex items-center'>
            <div>
              <p className='mb-2 font-semibold' style={{ color: '#2b2c34' }}>
                ID Type
              </p>
              <Select styles={bloomDetailsSelectMini} />
            </div>
            <div className='ml-7 mr-7'>
              <p className='mb-2 font-semibold' style={{ color: '#2b2c34' }}>
                ID Number
              </p>
              <input type='text' className='group-input' style={{ width: '16.5rem' }} />
            </div>
            <div>
              <p className='mb-2 font-semibold' style={{ color: '#2b2c34' }}>
                Upload documents
              </p>
              <div style={{ width: '16.5rem', height: '2.8rem' }}>
                <label htmlFor={'image-upload' + key} className='cursor-pointer'>
                  {imgPreview && (
                    <img
                      className='h-16 border border-main-blue border-dashed'
                      style={{ width: '16.5rem', height: '2.8rem' }}
                      src={imgPreview}
                      alt='uploaded image'
                    />
                  )}
                  {!imgPreview && (
                    <div
                      style={{ width: '16.5rem', height: '2.8rem' }}
                      className='flex items-center justify-center h-16 border border-main-blue border-dashed text-main-blue text-xl'
                    >
                      <p className='bg-main-blue rounded-full text-white w-4 flex items-center justify-center h-4 text-sm'>
                        +
                      </p>
                    </div>
                  )}
                </label>
                <input
                  type='file'
                  id={'image-upload' + key}
                  name={'image-upload' + key}
                  className='hidden'
                  accept='image/*'
                  onChange={changeImageHandler}
                />
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
      <button
        onClick={() => addCardRender([...cardRender, Math.random()])}
        className='mb-10 none-after flex items-center font-semibold text-sm'
        style={{ color: '#ababcd' }}
      >
        <Close />
        Add id proof
      </button>
    </div>
  )
}

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
