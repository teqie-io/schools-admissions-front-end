import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

import { Payment } from '@app/components/admission-module'
import { backarrow, paymentimg } from '../image'
import BloomCrumbs from '@app/components/bloomingdale/crumbs/crumbs'
import BloomHeader from '@app/components/bloomingdale/header/header'
import { NavLink, useHistory } from 'react-router-dom'

const dataLinks = [
  { name: 'Applicant Details', active: 'Done' },
  { name: 'Application Fee', active: 'Active' },
  { name: 'Child Assessment', active: 'Unactive' },
  { name: 'Principial Approval', active: 'Unactive' },
  { name: 'Documents', active: 'Unactive' },
  { name: 'Finance Aproval', active: 'Unactive' }
]

export default function BloomPayment() {
  const [payment, setPayment] = useState(false)

  const appStyle = document.getElementsByClassName('app')

  useEffect(() => {
    if (appStyle && appStyle[0]) appStyle[0].style.overflowX = 'hidden'
  }, [])

  const history = useHistory()

  useEffect(() => {
    payment === true && setTimeout(() => history.push('/bloomingdale-child-assessment'), 2000)
  }, [payment])

  return (
    <div>
      <BloomHeader />
      <BloomCrumbs data={dataLinks} />
      <div className='w-screen flex items-start mt-12 pl-20'>
        <button className='h-8 flex items-center none-after font-semibold cursor-pointer mr-10'>
          <img src={backarrow} className='w-4 h-4' />
        </button>
        <div className='w-screen flex flex-col items-center pr-40 mt-1'>
          {!payment ? (
            <React.Fragment>
              <p className='font-semibold mb-10' onClick={() => setPayment(true)}>
                Application Fee Payment
              </p>
              <Payment onClick={setPayment} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p className='font-semibold mb-10'>Application Payment Status</p>
              <img
                src={paymentimg}
                alt='payment'
                className='mb-10'
                style={{ width: '31.25rem', height: '26.875rem' }}
              />
              <div className='flex items-center font-semibold text-lg mb-2.5' style={{ color: '#00a86b' }}>
                <Done />
                Success
              </div>
              <p className='font-semibold text-sm mb-2.5'>
                Your payment was successful, it's time to schedule a test date
              </p>
              <NavLink to='/bloomingdale-child-assessment'>
                <div className='text-third-gray flex items-center text-sm font-semibold'>
                  <Refresh />
                  Hold on, we are redirecting you
                </div>
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  )
}

const Done = () => {
  return (
    <svg width='20' height='20' className='mr-2' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
