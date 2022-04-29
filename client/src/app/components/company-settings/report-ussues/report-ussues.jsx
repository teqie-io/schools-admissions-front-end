import React, { useState } from 'react'
import clsx from 'clsx'
import ReactTooltip from 'react-tooltip'

import { Checkbox } from '@stories'

export default function ReportIssues() {
  const [state, setState] = useState({
    all: false
  })

  const rowsData = [
    {
      active: 'solved',
      subject: 'Not able to add users',
      id: '1372913',
      requasted: 'Likhit Grandhi',
      date: '02 August, 2021',
      assigned: 'Mophil ram'
    },
    {
      active: 'pending',
      subject: 'Issues with finance module',
      id: '1522123',
      requasted: 'Priya Kandula',
      date: '21 September, 2021',
      assigned: 'assign'
    },
    {
      active: 'solved',
      subject: 'Not able to add users',
      id: '1372913',
      requasted: 'Likhit Grandhi',
      date: '02 August, 2021',
      assigned: 'Mophil ram'
    },
    {
      active: 'solved',
      subject: 'Issues with finance module',
      id: '1522123',
      requasted: 'Priya Kandula',
      date: '21 September, 2021',
      assigned: 'Priya Kandula'
    }
  ]

  return (
    <div>
      <div className='flex items-center justify-between w-full mb-10'>
        <h1 className='font-bold text-2xl'>{`Issues / Reports  (${rowsData.length})`}</h1>
      </div>
      <table className='w-full mb-10'>
        <thead>
          <tr className='font-medium text-xs' style={{ height: '3rem' }}>
            <th align='left' className='pl-2'>
              <Checkbox value={state.all} onChange={() => setState({ ...state, all: !state.all })} />
            </th>
            <th align='left'>Ticket Subject</th>
            <th align='left'>Ticket ID</th>
            <th align='left'>Requested by</th>
            <th align='left'>Created On</th>
            <th align='left'>Assigned to</th>
            <th align='left'>Status</th>
          </tr>
        </thead>
        <tbody>
          {rowsData.map((type, key) => (
            <React.Fragment key={key}>
              <ReactTooltip id='main' place='top' type='dark' effect='float' multiline={true} />
              <tr
                className='font-medium text-sm'
                style={key % 2 === 0 ? { background: '#F1F2F3', height: '3rem' } : { height: '3rem' }}
              >
                <td className='rounded-l-md pl-2'>
                  <Checkbox value={state.all ? true : null} />
                </td>
                <td
                  style={{ width: '17.125rem' }}
                  className='whitespace-pre overflow-ellipsis overflow-hidden'
                  data-for='main'
                  data-tip={type.subject}
                  data-iscapture='true'
                >
                  {type.subject}
                </td>
                <td style={{ width: '13.125rem' }}>{type.id}</td>
                <td>{type.requasted}</td>
                <td>{type.date}</td>
                <td align='left'>
                  {type.assigned === 'assign' ? (
                    <button
                      className='flex items-center justify-center font-bold text-xs'
                      style={{ width: '6.625rem', height: '1.875rem', background: '#F1F2F3', color: '#663174' }}
                    >
                      Assign Buddy
                    </button>
                  ) : (
                    type.assigned
                  )}
                </td>
                <td
                  className='rounded-r-md'
                  style={type.active === 'solved' ? { color: '#3A8B93' } : { color: '#fbd07f' }}
                >
                  {type.active === 'solved' ? 'Solved' : 'Pending'}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}
