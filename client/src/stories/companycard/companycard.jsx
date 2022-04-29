import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import { mainavatar } from '../../app/static/image'

export default function CompanyCard({ title, body, billing, currently }) {
  const history = useHistory()

  return (
    <div
      className='company-card'
      onClick={() => {
        history.push('/giiki/settings')
      }}
    >
      <div className='flex items-center'>
        <img src={mainavatar} className='w-10 h-10 mr-4 rounded-full' alt='campus' />
        <div>
          <p className='text-sm font-medium text-main-black'>{title}</p>
          <p className='text-sm font-medium text-second-gray'>{body}</p>
        </div>
      </div>
      <div>
        <p className='text-sm font-medium text-main-black'>{billing}</p>
        <div className='text-sm font-medium text-second-gray flex items-center'>
          <Done />
          {currently}
        </div>
      </div>
      <button className='none-after'>
        <Arrow />
      </button>
    </div>
  )
}

CompanyCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  billing: PropTypes.string,
  currently: PropTypes.string
}

CompanyCard.defaultProps = {
  title: 'Nalanda Group of Education Pvt. Ltd.',
  body: 'Vijaywada, Andhra Pradesh',
  billing: 'Next billing on September 11, 2023',
  currently: 'Currently Active'
}

const Done = () => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' className='mr-2' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.7066 6.14L15.3333 8L13.7066 9.86L13.9333 12.32L11.5266 12.8667L10.2666 14.9933L7.99996 14.02L5.73329 15L4.47329 12.8733L2.06663 12.3267L2.29329 9.86L0.666626 8L2.29329 6.13333L2.06663 3.66667L4.47329 3.12667L5.73329 1L7.99996 1.97333L10.2666 1L11.5266 3.13333L13.9333 3.68L13.7066 6.14ZM4.19329 8.60667L6.72663 11.1467L11.6133 6.24667L10.6266 5.26L6.72663 9.17333L5.17996 7.62L4.19329 8.60667Z'
        fill='#00AB55'
      />
    </svg>
  )
}

const Arrow = () => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9.99999 18.9999C9.76634 19.0004 9.53991 18.919 9.35999 18.7699C9.15549 18.6004 9.02685 18.3564 9.00246 18.0919C8.97807 17.8274 9.05993 17.564 9.22999 17.3599L13.71 11.9999L9.38999 6.62994C9.22222 6.42335 9.14372 6.1584 9.17188 5.89376C9.20003 5.62912 9.33251 5.38662 9.53999 5.21994C9.74916 5.03591 10.0256 4.94747 10.3028 4.97594C10.5799 5.00442 10.8326 5.14722 11 5.36994L15.83 11.3699C16.1333 11.7389 16.1333 12.2709 15.83 12.6399L10.83 18.6399C10.6265 18.8854 10.3182 19.0191 9.99999 18.9999Z'
        fill='#CFD0D7'
      />
    </svg>
  )
}
