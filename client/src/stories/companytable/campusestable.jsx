import React from 'react'
import clsx from 'clsx'

import '../../app/components/campus-list/table.scss'
import Checkbox from '../checkbox/checkbox'
import { boxArrow, ellipsis } from '../../app/static/image'

export default function CampusesTable({ status, avatar, name, location, code }) {
  return (
    <div className='datatable'>
      <div className='datatable-item flex items-center justify-between'>
        <td className='datatable-checkbox'>
          {status && status.trim() === 'draft' ? <Checkbox disabled={true} value={true} /> : <Checkbox />}
        </td>

        <td className='datatable-info'>
          <img className='datatable-avatar' src={avatar} />
          <div>
            <h3 className='datatable-name h5 font-normal'>{name}</h3>
            <p className='datatable-location'>{location}</p>
          </div>
        </td>

        <td className='datatable-code'>{code}</td>

        <td>
          {status.trim() === 'active' ? (
            <DataTableStatus text='active' status='active'></DataTableStatus>
          ) : status.trim() === 'disabled' ? (
            <DataTableStatus text='disabled' status='disabled'></DataTableStatus>
          ) : status.trim() === 'draft' ? (
            <DataTableStatus text='draft' status='draft'></DataTableStatus>
          ) : (
            ''
          )}
        </td>

        <td className='datatable-action' align='right'>
          <button className='datatable-button'>
            <img src={boxArrow} alt='button' />
          </button>
          <button className='datatable-button'>
            <img src={ellipsis} alt='button' />
          </button>
        </td>
      </div>
    </div>
  )
}

const DataTableStatus = ({ text, status }) => {
  return <div className={clsx('datatable-status', `datatable-status--${status}`)}>{text}</div>
}
