import React from 'react'
import ReactTooltip from 'react-tooltip'

import { mainavatar } from '@image'
import { Checkbox } from '@stories'

export default function Campuses() {
  const rowsData = [
    {
      active: 'active',
      campus: 'Bloomingdale - Galileo Campus',
      location: 'Benz  Circle',
      tip: 'Vijayawada, Andhra Pradesh'
    },
    {
      active: 'active',
      campus: 'Bloomingdale - Village Campus',
      location: 'Village Campus',
      tip: 'Electronic City, Karnataka, Banglore'
    },
    {
      active: 'inactive',
      campus: 'Bloomingdale - Ruby Campus',
      location: 'Karnataka',
      tip: 'Electronic City, Karnataka, Banglore'
    }
  ]

  return (
    <div>
      <h1 className='font-bold text-2xl mb-10'>{`Campuses (${rowsData.length})`}</h1>
      <table className='w-full'>
        <thead>
          <tr className='font-medium text-xs'>
            <th align='left' className='relative' style={{ left: 6 }}>
              <Checkbox />
            </th>
            <th align='left'>Campus Name</th>
            <th align='left'>Location</th>
            <th align='left'>Created On</th>
            <th align='left'>Status</th>
          </tr>
        </thead>
        <tbody>
          {rowsData.map((type, key) => (
            <React.Fragment key={key}>
              <ReactTooltip id='main' place='top' type='dark' effect='float' multiline={true} />
              <tr className='h-6' />
              <tr className='font-medium text-sm'>
                <td>
                  <img className='w-8 h-8 rounded-full' src={mainavatar} alt='campuses' />
                </td>
                <td>{type.campus}</td>
                <td data-for='main' data-tip={type.tip} data-iscapture='true'>
                  {type.location}
                </td>
                <td>{`${key}2 August, 2021`}</td>
                <td style={type.active === 'active' ? { color: '#3A8B93' } : { color: '#6C0F00' }}>
                  {type.active === 'active' ? 'Active' : 'Inactive'}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}
