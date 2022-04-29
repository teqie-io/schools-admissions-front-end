import React from 'react'
import clsx from 'clsx'

import { dataLinks } from '@entities/routes'
import { NavLinks } from '@components/header'
import './admission-approvals.scss'
import { ApprovalItem } from '@components/admission-module'

const AdmissionApprovals = ({ burger }) => {
  return (
    <div
      className={clsx('admission-approvals ml-20 pr-6', burger ? 'pl-0 1400px:pl-69  2xl:pl-69' : 'pl-0 1400px:pl-20')}
    >
      <NavLinks urls={dataLinks.ApprovalEditLinks} />
      <div className='w-full flex mb-10 items-center justify-between'>
        <h1 className='namepage'>Admission Approvals</h1>
        <button className='bg-main-blue text-white p-2 pr-3.5 pl-3.5 rounded'>Add Approval Process</button>
      </div>
      <div className='w-full'>
        <ApprovalItem title='Applications' />
        <ApprovalItem title='Scholarship' />
      </div>
    </div>
  )
}

export default AdmissionApprovals
