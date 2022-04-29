import React from 'react'
import PropTypes from 'prop-types'

import giikilogo from '../../app/components/company-settings/plan-billing/giikilogo.svg'

export default function PlanBillingCard({ plan, dateEnd, paySum, countStud, currentStud, staff }) {
  return (
    <div className='w-full border flex flex-col p-8' style={{ height: '19.188rem' }}>
      <div className='w-full flex items-center justify-between'>
        <div className='flex items-center'>
          <img src={giikilogo} alt='plan' />
          <p className='font-bold text-2xl ml-2'>{plan}</p>
        </div>
        <div className='flex items-center'>
          <p className='text-sm font-medium' style={{ color: '#0E353D' }}>
            Subscription end date
          </p>
          <div className='pr-3 pb-1 pl-3 pt-1 text-sm rounded-md mr-4 ml-4' style={{ background: '#FFD79D' }}>
            {dateEnd}
          </div>
          <div
            className='pr-3 pb-1 pl-3 pt-1 rounded-md text-sm text-button-disable'
            style={{ background: 'rgba(145, 158, 171, 0.24)' }}
          >
            Renew
          </div>
        </div>
      </div>
      <div className='w-full flex items-center justify-between'>
        <h1 className='mt-14 mb-2 text-5xl font-bold'>${paySum}</h1>
        <h1 className='mt-14 mb-2 text-5xl font-bold'>{countStud}</h1>
      </div>
      <div className='w-full flex items-center justify-between'>
        <p className='font-bold text-base'>per student per month</p>
        <p className='font-bold text-base'>
          ({currentStud} students, {staff} staff)
        </p>
      </div>
      <div className='w-full flex items-end justify-end'>
        <button className='text-main-blue none-after text-sm font-bold'>manage</button>
      </div>
    </div>
  )
}

PlanBillingCard.propTypes = {
  plan: PropTypes.string,
  dateEnd: PropTypes.string,
  paySum: PropTypes.number,
  countStud: PropTypes.number,
  currentStud: PropTypes.number,
  staff: PropTypes.number
}

PlanBillingCard.defaultProps = {
  plan: 'Starter Plan',
  dateEnd: 'Aug 25, 2025',
  paySum: 25,
  countStud: 250,
  currentStud: 200,
  staff: 50
}
