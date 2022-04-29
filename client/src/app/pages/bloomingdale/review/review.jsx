import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

import { backarrow } from '../image'
import BloomCrumbs from '@app/components/bloomingdale/crumbs/crumbs'
import BloomHeader from '@app/components/bloomingdale/header/header'
import './review.scss'
import { NavLink } from 'react-router-dom'

const dataLinks = [
  { name: 'Applicant Details', active: 'Active' },
  { name: 'Application Fee', active: 'Unactive' },
  { name: 'Child Assessment', active: 'Unactive' },
  { name: 'Principial Approval', active: 'Unactive' },
  { name: 'Documents', active: 'Unactive' },
  { name: 'Finance Aproval', active: 'Unactive' }
]

export default function BloomReview() {
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
      <div className='w-screen flex items-start mt-12 pl-20'>
        <button className='h-8 flex items-center none-after font-semibold cursor-pointer mr-10'>
          <img src={backarrow} className='w-4 h-4' />
        </button>
        <div className='w-screen flex flex-col items-start pr-40 mt-1'>
          <p className='font-semibold'>Review Application</p>
          <div
            className='w-full mt-10 mb-5 border flex items-center justify-center text-third-gray'
            style={{ height: '55rem' }}
          >
            {imgPreview ? (
              <img className='w-full h-full' src={imgPreview} alt='uploaded image' />
            ) : (
              <p>Filled PDF Template of Application Form</p>
            )}
          </div>
          <div className='w-full'>
            <label htmlFor='image-upload' className='cursor-pointer'>
              <div className='flex items-center justify-center w-full h-16 mb-10 border border-main-blue border-dashed text-main-blue text-xl'>
                <p className='bg-main-blue rounded-full text-white w-4 flex items-center justify-center h-4 text-sm'>
                  +
                </p>
                <p className='ml-2.5 text-base font-semibold'>Add E-Siganture</p>
              </div>
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
          <div className='bloom-footer w-full'>
            <button
              className='pl-3.5 pr-3.5 pt-1.5 pb-1.5 text-sm text-white font-semibold mr-3.5'
              style={{ background: '#00a86b' }}
            >
              Save
            </button>
            <NavLink to='/bloomingdale-payment'>
              <button className='flex items-center bg-main-blue pl-3.5 pr-1.5 pt-1 pb-1 text-sm text-white font-semibold'>
                Next
                <Arrow />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
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
