import React, { useState } from 'react'
import clsx from 'clsx'

import { rolesDataProgCard } from '@entities/data'
import { searchgray, bifilterleft } from '@image'
import { ProdCard } from '@stories'
import Footer from '@components/footer/footer.jsx'

export default function RolesPermissions({ burger }) {
  const rolesData = [
    { name: 'Admissions', tabs: ['Enquiry', 'Payments', 'Test Schdule', 'Document Review'] },
    { name: 'Finance', tabs: ['Fee Payments', 'Budgets'] }
  ]

  const [openAdmissions, isOpenAdmissions] = useState(false)
  const [openFinance, isOpenFinance] = useState(false)

  return (
    <div>
      <div className='flex'>
        <div className='grades-programs-search'>
          <div className='grades-programs-search-input'>
            <img className='grades-programs-search-input_img' src={searchgray} alt='search' />
            <input className='grades-programs-search-input_input' placeholder='Search' />
            <img className='grades-programs-search-input_sort' src={bifilterleft} alt='filter' />
          </div>
          {rolesData.map((item, key) => {
            return (
              <React.Fragment key={key}>
                {key === 0 && <hr className='hr-top' />}
                <div
                  className='pl-10 relative flex items-center'
                  style={key === 0 ? { marginTop: '5.625rem', minHeight: '2.5rem' } : { minHeight: '2.5rem' }}
                >
                  <Arrow open={item.name === 'Admissions' ? openAdmissions : openFinance} />
                  <h2
                    className='mb-3 cursor-pointer subtitle1'
                    onClick={
                      item.name === 'Admissions'
                        ? () => isOpenAdmissions(!openAdmissions)
                        : () => isOpenFinance(!openFinance)
                    }
                  >
                    {item.name}
                  </h2>
                </div>
                {(item.name === 'Admissions' ? openAdmissions : openFinance) &&
                  item.tabs.map((list, key) => (
                    <React.Fragment>
                      {key === 0 && <hr className='hr-bottom' />}
                      <p className='h-10 pl-10' key={key}>
                        {list}
                      </p>
                      {key !== item.tabs.length - 1 && <hr className='hr-bottom' />}
                    </React.Fragment>
                  ))}
                {key !== rolesData.length - 1 && <hr className='hr-bottom' />}
              </React.Fragment>
            )
          })}
        </div>
        <div className='grades-programs-row'>
          <div className='grades-programs-row_card'>
            {rolesDataProgCard.map((item, key) => (
              <ProdCard
                key={key}
                access={true}
                firstHeader={item.firstHeader}
                firstName={item.firstName}
                modal={item.modal}
                crumbs={item.crumbs}
                opinio={item.opinio}
                secondHeader={item.secondHeader}
                secondName={item.secondName}
              />
            ))}
          </div>
          <div className={clsx(openAdmissions ? 'block' : 'hidden')}>
            {[0, 1, 2, 3, 4].map((key) =>
              key === 0 ? <div className='flex h-10 relative top-7' /> : <GradesCard key={key} />
            )}
          </div>
          <div className={clsx(openFinance ? 'block' : 'hidden')}>
            {[0, 1, 2].map((key) =>
              key === 0 ? (
                <React.Fragment>
                  <div className='flex h-10 relative top-7' />
                  {!openAdmissions && <div className='flex h-10 relative top-7' />}
                </React.Fragment>
              ) : (
                <div className={openAdmissions ? 'relative top-1' : ''}>
                  <GradesCard key={key} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Footer burger={burger} />
    </div>
  )
}

const Arrow = ({ open }) => {
  return (
    <svg
      width='12'
      className={clsx('transform transition-all absolute left-3.5 top-2.5', open ? 'rotate-0' : 'rotate-180')}
      height='8'
      viewBox='0 0 12 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.7651 7L5.88262 1L1.00009 7'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function GradesCard() {
  const data = [
    { eyes: false, draw: false, add: false },
    { eyes: false, draw: false, add: false },
    { eyes: false, draw: true, add: false },
    { eyes: true, draw: true, add: true }
  ]

  return (
    <div className='flex h-10 relative' style={{ top: '1.9rem' }}>
      {data.map((item, key) => (
        <div key={key} className='flex items-center ml-7 w-56'>
          <Eyes disable={item.eyes} />
          <Draw disable={item.draw} />
          <Add disable={item.add} />
        </div>
      ))}
    </div>
  )
}

const Eyes = ({ disable }) => {
  return disable ? (
    <svg
      width='24'
      className='mr-2 cursor-not-allowed'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='12' fill='#C4CDD5' />
      <rect width='12' height='12' transform='translate(6 6)' fill='#C4CDD5' />
      <circle cx='12' cy='12' r='0.75' fill='white' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.865 8.50018C14.855 8.41018 16.615 11.1952 16.935 11.7502C17.0244 11.9049 17.0244 12.0955 16.935 12.2502C16.505 13.0002 14.9 15.4302 12.135 15.5002H12.01C9.06503 15.5002 7.38003 12.7952 7.06503 12.2502C6.97572 12.0955 6.97572 11.9049 7.06503 11.7502C7.50003 11.0002 9.10003 8.57018 11.865 8.50018ZM10.25 12.0002C10.25 12.9667 11.0335 13.7502 12 13.7502C12.9665 13.7502 13.75 12.9667 13.75 12.0002C13.75 11.0337 12.9665 10.2502 12 10.2502C11.0335 10.2502 10.25 11.0337 10.25 12.0002Z'
        fill='white'
      />
    </svg>
  ) : (
    <svg
      width='24'
      className='mr-2 cursor-pointer'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='12' fill='#404EED' />
      <circle cx='12' cy='12' r='0.75' fill='white' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.865 8.50018C14.855 8.41018 16.615 11.1952 16.935 11.7502C17.0244 11.9049 17.0244 12.0955 16.935 12.2502C16.505 13.0002 14.9 15.4302 12.135 15.5002H12.01C9.06503 15.5002 7.38003 12.7952 7.06503 12.2502C6.97572 12.0955 6.97572 11.9049 7.06503 11.7502C7.50003 11.0002 9.10003 8.57018 11.865 8.50018ZM10.25 12.0002C10.25 12.9667 11.0335 13.7502 12 13.7502C12.9665 13.7502 13.75 12.9667 13.75 12.0002C13.75 11.0337 12.9665 10.2502 12 10.2502C11.0335 10.2502 10.25 11.0337 10.25 12.0002Z'
        fill='white'
      />
    </svg>
  )
}

const Draw = ({ disable }) => {
  return disable ? (
    <svg
      width='24'
      className='mr-2 cursor-not-allowed'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='12' fill='#C4CDD5' />
      <rect width='12' height='12' transform='translate(6 6)' fill='#C4CDD5' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.3302 8.29993L15.7002 9.66993C16.0831 10.0348 16.0988 10.6408 15.7352 11.0249L11.2352 15.5249C11.0722 15.6865 10.8585 15.7872 10.6302 15.8099L8.54515 15.9999H8.50015C8.36725 16.0007 8.23951 15.9485 8.14515 15.8549C8.03967 15.7498 7.98651 15.6032 8.00015 15.4549L8.21515 13.3699C8.2379 13.1415 8.33853 12.9279 8.50015 12.7649L13.0002 8.26493C13.3881 7.93721 13.96 7.95226 14.3302 8.29993ZM12.6602 9.99993L14.0002 11.3399L15.0002 10.3649L13.6352 8.99993L12.6602 9.99993Z'
        fill='white'
      />
    </svg>
  ) : (
    <svg
      width='24'
      className='mr-2 cursor-pointer'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='12' fill='#404EED' />
      <rect width='12' height='12' transform='translate(6 6)' fill='#404EED' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.3302 8.29993L15.7002 9.66993C16.0831 10.0348 16.0988 10.6408 15.7352 11.0249L11.2352 15.5249C11.0722 15.6865 10.8585 15.7872 10.6302 15.8099L8.54515 15.9999H8.50015C8.36725 16.0007 8.23951 15.9485 8.14515 15.8549C8.03967 15.7498 7.98651 15.6032 8.00015 15.4549L8.21515 13.3699C8.2379 13.1415 8.33853 12.9279 8.50015 12.7649L13.0002 8.26493C13.3881 7.93721 13.96 7.95226 14.3302 8.29993ZM12.6602 9.99993L14.0002 11.3399L15.0002 10.3649L13.6352 8.99993L12.6602 9.99993Z'
        fill='white'
      />
    </svg>
  )
}

const Add = ({ disable }) => {
  return disable ? (
    <svg
      width='24'
      className='mr-2 cursor-not-allowed'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='12' fill='#C4CDD5' />
      <rect width='12' height='12' transform='translate(6 6)' fill='#C4CDD5' />
      <path
        d='M15.5 11.5H12.5V8.5C12.5 8.22386 12.2761 8 12 8C11.7239 8 11.5 8.22386 11.5 8.5V11.5H8.5C8.22386 11.5 8 11.7239 8 12C8 12.2761 8.22386 12.5 8.5 12.5H11.5V15.5C11.5 15.7761 11.7239 16 12 16C12.2761 16 12.5 15.7761 12.5 15.5V12.5H15.5C15.7761 12.5 16 12.2761 16 12C16 11.7239 15.7761 11.5 15.5 11.5Z'
        fill='white'
      />
    </svg>
  ) : (
    <svg
      width='24'
      className='mr-2 cursor-pointer'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='12' fill='#404EED' />
      <rect width='12' height='12' transform='translate(6 6)' fill='#404EED' />
      <path
        d='M15.5 11.5H12.5V8.5C12.5 8.22386 12.2761 8 12 8C11.7239 8 11.5 8.22386 11.5 8.5V11.5H8.5C8.22386 11.5 8 11.7239 8 12C8 12.2761 8.22386 12.5 8.5 12.5H11.5V15.5C11.5 15.7761 11.7239 16 12 16C12.2761 16 12.5 15.7761 12.5 15.5V12.5H15.5C15.7761 12.5 16 12.2761 16 12C16 11.7239 15.7761 11.5 15.5 11.5Z'
        fill='white'
      />
    </svg>
  )
}
