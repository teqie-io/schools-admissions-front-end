import React from 'react'
import ReactTooltip from 'react-tooltip'

import { Checkbox } from '../'

export default function IssuesTable({ subject, id, requasted, date, assigned, active }) {
  return (
    <div>
      <ReactTooltip id='main' place='top' type='dark' effect='float' multiline={true} />
      <div className='font-medium text-sm flex items-center justify-between w-full'>
        <td className='rounded-l-md pl-2'>
          <Checkbox />
        </td>
        <td
          style={{ width: '17.125rem' }}
          className='whitespace-pre overflow-ellipsis overflow-hidden'
          data-for='main'
          data-tip={subject}
          data-iscapture='true'
        >
          {subject}
        </td>
        <td style={{ width: '13.125rem' }}>{id}</td>
        <td>{requasted}</td>
        <td>{date}</td>
        <td align='left'>
          {assigned === 'assign' ? (
            <button
              className='flex items-center justify-center font-bold text-xs'
              style={{ width: '6.625rem', height: '1.875rem', background: '#F1F2F3', color: '#663174' }}
            >
              Assign Buddy
            </button>
          ) : (
            assigned
          )}
        </td>
        <td className='rounded-r-md' style={active === 'solved' ? { color: '#3A8B93' } : { color: '#fbd07f' }}>
          {active === 'solved' ? 'Solved' : 'Pending'}
        </td>
      </div>
    </div>
  )
}
