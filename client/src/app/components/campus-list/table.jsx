import React, { useState } from 'react'
import clsx from 'clsx'

import Pagination from '../../../stories/pagination/pagination'
import './table.scss'

import Checkbox from '@stories/checkbox/checkbox'
import { boxArrow, ellipsis, arrow } from '@image'

const Table = ({ headerData, bodyData }) => {
  const [page, setPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  return (
    <>
      <table className='table-auto datatable'>
        <thead className='datatable-header'>
          <tr>
            {headerData.map((item, key) => {
              return (
                <th key={key} align={key === 4 ? 'rigth' : ''}>
                  {item}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className='datatable-body'>
          {bodyData.map((data) => {
            return (
              <tr className='datatable-item'>
                <td className='datatable-checkbox'>
                  {data.status && data.status.trim() === 'draft' ? (
                    <Checkbox disabled={true} value={true} />
                  ) : (
                    <Checkbox />
                  )}
                </td>

                <td className='datatable-info'>
                  <img className='datatable-avatar' src={data.avatar} />
                  <div>
                    <p className='datatable-name font-medium' style={{ color: '#212B36' }}>
                      {data.name}
                    </p>
                    <p className='datatable-location'>{data.location}</p>
                  </div>
                </td>

                <td className='datatable-code'>{data.code}</td>

                <td>
                  {data.status?.trim() === 'active' ? (
                    <DataTableStatus text='active' status='active'></DataTableStatus>
                  ) : data.status?.trim() === 'disabled' ? (
                    <DataTableStatus text='disabled' status='disabled'></DataTableStatus>
                  ) : data.status?.trim() === 'draft' ? (
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
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='datatable-footer'>
        <Pagination
          rowsPerPageCount={[5, 10]}
          countPages={11}
          previewPage={1}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleChangePage={handleChangePage}
        />
      </div>
    </>
  )
}

const DataTableStatus = ({ text, status }) => {
  return <div className={clsx('datatable-status', `datatable-status--${status}`)}>{text}</div>
}

export default Table
