import React from 'react'
import ReactTooltip from 'react-tooltip'

export default function CompanyTableRow({ image, active, tip, location, campus, date }) {
  return (
    <div>
      <ReactTooltip id='main' place='top' type='dark' effect='float' multiline={true} />
      <tr className='h-6' />
      <div className='font-medium text-sm flex items-center justify-between'>
        <div>
          <img className='w-8 h-8 rounded-full' src={image} alt='campuses' />
        </div>
        <div className=''>{campus}</div>
        <td data-for='main' data-tip={tip} data-iscapture='true'>
          {location}
        </td>
        <td>{date}</td>
        <td style={active === 'active' ? { color: '#3A8B93' } : { color: '#6C0F00' }}>
          {active === 'active' ? 'Active' : 'Inactive'}
        </td>
      </div>
    </div>
  )
}
