import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

import { backarrow, child, woman } from '../image'
import { Schduled, StaticPicker } from '@stories/'
import { students } from '@components/admission-module/application/exam/image'
import BloomCrumbs from '@app/components/bloomingdale/crumbs/crumbs'
import BloomHeader from '@app/components/bloomingdale/header/header'
import { ButtonDatePicker } from '@components/admission-module/application/exam/sub-components'
import { useHistory } from 'react-router-dom'

const dataLinks = [
  { name: 'Applicant Details', active: 'Done' },
  { name: 'Application Fee', active: 'Done' },
  { name: 'Child Assessment', active: 'Active' },
  { name: 'Principial Approval', active: 'Unactive' },
  { name: 'Documents', active: 'Unactive' },
  { name: 'Finance Aproval', active: 'Unactive' }
]

export default function BloomChildAssessment() {
  const [type, setType] = useState('test')

  const appStyle = document.getElementsByClassName('app')

  useEffect(() => {
    if (appStyle && appStyle[0]) appStyle[0].style.overflowX = 'hidden'
  }, [])

  const history = useHistory()

  useEffect(() => {
    type === 'scheldued' && setTimeout(() => setType('congratulations'), 2000)
  }, [type])

  return (
    <div>
      <BloomHeader />
      <BloomCrumbs data={dataLinks} />
      <div className='w-screen flex items-start mt-12 pl-20'>
        <button className='h-8 flex items-center none-after font-semibold cursor-pointer mr-10'>
          <img src={backarrow} className='w-4 h-4' />
        </button>
        <div className={clsx('w-screen flex flex-col pr-40 mt-1', type !== 'test' && 'items-center')}>
          {type === 'congratulations' && <ChildAssessmentDone setType={setType} />}
          {type === 'scheldued' && <ChildAssessmentSchduled setType={setType} />}
          {type === 'test' && <ChildAssessmentTestDate setType={setType} />}
        </div>
      </div>
    </div>
  )
}

const ChildAssessmentTestDate = ({ setType }) => {
  return (
    <div className='relative'>
      <p className='font-semibold mb-10'>Schedule a Test Date</p>
      <div className='w-full flex mt-1'>
        <TestCardRender />
        <div className='mb-20 ml-32 grid grid-cols-2 items-center w-full shadow-xl' style={{ height: 640 }}>
          <div className='h-full flex items-center flex-col justify-start border-r'>
            <p className='text-third-gray font-semibold mb-10 mt-20'>Select a Date from below</p>
            <StaticPicker color='#1611da' />
          </div>
          <div className='h-full flex items-center flex-col justify-start'>
            <p className='text-third-gray font-semibold mb-10 mt-20'>Select a Time from below</p>
            <ButtonDatePicker color='#1611da' />
          </div>
        </div>
      </div>
      <div className='w-full flex items-end justify-end mb-10'>
        <button
          onClick={() => setType('scheldued')}
          className='flex items-center bg-main-blue pl-10 pr-8 pt-1 pb-1 text-sm text-white font-semibold mr-3.5'
        >
          Proceed Next
          <Arrow />
        </button>
      </div>
    </div>
  )
}

const TestCardRender = () => {
  return (
    <div className='relative top-32 h-full'>
      <div className='date_details'>
        <div className='date_details-date'>
          <p className='date_details-text'>Test Date</p>
          <p className='date_details-schedule'>21 January 2020</p>
        </div>
        <div className='date_details-time'>
          <p className='date_details-text'>Time</p>
          <p className='date_details-schedule'>12:00 - 12:30 PM</p>
        </div>
      </div>
      <img src={woman} className='absolute' style={{ top: 147, left: 130, width: 255, height: 200 }} />
    </div>
  )
}

const ChildAssessmentSchduled = ({ setType }) => {
  return (
    <React.Fragment>
      <p className='font-semibold mb-10'>Child Assessment</p>
      <img src={students} alt='' className='mb-5' />
      <p
        onClick={() => setType('congratulations')}
        className='font-semibold flex justify-center w-full'
        style={{ color: '#f9aa8a' }}
      >
        You child's results will be updated soon !
      </p>
      <Schduled bloom={true} />
    </React.Fragment>
  )
}

const ChildAssessmentDone = ({ setType }) => {
  return (
    <React.Fragment>
      <p className='font-semibold mb-10'>Child Assessment</p>
      <img src={child} alt='payment' className='mb-10' style={{ width: '25.25rem', height: '20.875rem' }} />
      <div className='flex items-center font-semibold mb-2.5' style={{ color: '#00a86b' }}>
        <Done />
      </div>
      <p className='font-semibold text-base mb-2.5' style={{ color: '#00a86b' }}>
        🎉 Your payment was successful, it's time to schedule a test date
      </p>
      <div className='w-full flex items-end justify-end mt-20'>
        <button className='flex items-center bg-main-blue pl-10 pr-8 pt-1 pb-1 text-sm text-white font-semibold mr-3.5'>
          Proceed Next
          <Arrow />
        </button>
      </div>
    </React.Fragment>
  )
}

const Done = () => {
  return (
    <svg width='24' height='24' className='mr-2' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.66602 10C1.66602 5.39763 5.39698 1.66667 9.99935 1.66667C12.2095 1.66667 14.3291 2.54464 15.8919 4.10744C17.4547 5.67025 18.3327 7.78986 18.3327 10C18.3327 14.6024 14.6017 18.3333 9.99935 18.3333C5.39698 18.3333 1.66602 14.6024 1.66602 10ZM9.77435 13.0083L13.5827 8.00834V7.98334C13.7643 7.74516 13.805 7.42819 13.6896 7.15182C13.5741 6.87545 13.32 6.68168 13.0229 6.64349C12.7258 6.60529 12.431 6.72849 12.2493 6.96667L9.09935 11.1333L7.74102 9.4C7.55792 9.1648 7.26325 9.04515 6.96801 9.08612C6.67277 9.12709 6.42182 9.32245 6.30968 9.59862C6.19754 9.87479 6.24125 10.1898 6.42435 10.425L8.45768 13.0167C8.6167 13.2179 8.85953 13.3347 9.11602 13.3333C9.37393 13.3327 9.61702 13.2127 9.77435 13.0083Z'
        fill='#00a86b'
      />
    </svg>
  )
}

const Refresh = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='mr-2'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      fill='#9fa9b3'
    >
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z' />
    </svg>
  )
}

const Arrow = () => {
  return (
    <svg width='24' height='24' className='ml-1.5' viewBox='0 -5 24 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M8.55 2.5L7 4.05L14.95 12L7 19.95L8.55 21.5L18 12L8.55 2.5Z' fill='white' />
    </svg>
  )
}
