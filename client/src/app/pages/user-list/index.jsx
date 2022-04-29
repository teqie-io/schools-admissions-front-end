import React, { useState } from 'react'
import clsx from 'clsx'

import { mainavatar } from '@image'
import { Checkbox } from '@stories'
import { arrow } from '@image'
import './user-list.scss'
import Pagination from '../../../stories/pagination/pagination'

const types = ['All Users', 'Students', 'Parents', 'Teachers', 'Admin', 'Guests']

export default function UserList({ burger }) {
  const [type, setType] = useState(types && types[1])

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
    <div className={clsx('user-list pr-24', burger ? 'pl-24 1400px:pl-80' : 'pl-24 1400px:pl-40')}>
      <h1 className='namepage'>User List</h1>
      <div className='mb-5'>
        {types.map((item, key) => (
          <button
            className={clsx(
              'mr-7 h-12 border-b-2 transition-all none-after',
              item === type ? 'border-main-blue' : 'border-white'
            )}
            onClick={() => setType(item)}
            key={key}
          >
            {item}
          </button>
        ))}
      </div>
      <table className='table-auto'>
        <thead className='border-b'>
          <tr className='h-14 relative left-5 text-main-black text-sm font-semibold'>
            <th align='left' className='w-12'>
              <Checkbox />
            </th>
            <th align='left'>
              <div className='flex items-center'>
                Name <Arrow />
              </div>
            </th>
            <th align='left'>Grade</th>
            <th align='left'>Parents</th>
            <th align='left'>Last Accessed</th>
            <th align='left'>Status</th>
            <th align='left'></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => (
            <tr key={key} className='h-16 relative left-5 text-main-black text-sm font-semibold'>
              <td className=''>
                <Checkbox />
              </td>
              <td>
                <div className='flex items-center font-medium'>
                  <img src={mainavatar} alt='profile' className='w-10 h-10 rounded-full mr-3.5' />
                  {item.name}
                </div>
              </td>
              <td>{item.grade}</td>
              <td>{item.parents}</td>
              <td>{item.accessed}</td>
              <td className='text-xs'>
                <div
                  className='rounded flex items-center justify-center'
                  style={
                    item.status === 'Active'
                      ? {
                          background: 'rgba(84, 214, 44, 0.16)',
                          width: '3.75rem',
                          height: '1.375rem',
                          color: '#229A16'
                        }
                      : {
                          background: 'rgba(255, 72, 66, 0.16)',
                          width: '4.25rem',
                          height: '1.375rem',
                          color: '#B72136'
                        }
                  }
                >
                  {item.status}
                </div>
              </td>
              <td>
                <Crumbs />
              </td>
            </tr>
          ))}
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
    </div>
  )
}

const data = [
  {
    image: mainavatar,
    name: 'Ingo Schimpff',
    grade: 'PY1',
    parents: 'Jack Schimpff',
    accessed: 'Yes',
    status: 'Active'
  },
  {
    image: mainavatar,
    name: 'Zarela Reed',
    grade: 'MY1',
    parents: 'Ron Reed',
    accessed: 'Yes',
    status: 'Active'
  },
  {
    image: mainavatar,
    name: 'Jordanna Kitchener',
    grade: 'MY2',
    parents: 'Mathew Kitchener',
    accessed: 'No',
    status: 'Banned'
  },
  {
    image: mainavatar,
    name: 'Kari Granleese',
    grade: 'PY3',
    parents: 'Karla Granleese',
    accessed: 'No',
    status: 'Banned'
  },
  {
    image: mainavatar,
    name: 'Lungelo Ngcaba',
    grade: 'MY3',
    parents: 'Lucas Ngcaba',
    accessed: 'Yes',
    status: 'Active'
  }
]

const Arrow = () => {
  return (
    <svg width='19' className='ml-1' height='18' viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M15.4443 9L14.3868 7.9425L10.1943 12.1275V3H8.69434V12.1275L4.50934 7.935L3.44434 9L9.44434 15L15.4443 9Z'
        fill='#212B36'
      />
    </svg>
  )
}

const Crumbs = () => {
  return (
    <svg
      width='21'
      height='20'
      className='cursor-pointer'
      viewBox='0 0 21 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.7884 4.16667C11.7884 5.08714 11.0422 5.83333 10.1217 5.83333C9.20127 5.83333 8.45508 5.08714 8.45508 4.16667C8.45508 3.24619 9.20127 2.5 10.1217 2.5C11.0422 2.5 11.7884 3.24619 11.7884 4.16667ZM11.7884 10C11.7884 10.9205 11.0422 11.6667 10.1217 11.6667C9.20127 11.6667 8.45508 10.9205 8.45508 10C8.45508 9.07953 9.20127 8.33333 10.1217 8.33333C11.0422 8.33333 11.7884 9.07953 11.7884 10ZM10.1217 17.5C11.0422 17.5 11.7884 16.7538 11.7884 15.8333C11.7884 14.9129 11.0422 14.1667 10.1217 14.1667C9.20127 14.1667 8.45508 14.9129 8.45508 15.8333C8.45508 16.7538 9.20127 17.5 10.1217 17.5Z'
        fill='#637381'
      />
    </svg>
  )
}
