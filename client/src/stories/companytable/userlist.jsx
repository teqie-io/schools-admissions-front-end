import React from 'react'

import { Checkbox } from '../'

export default function UserList({ image, name, grade, parents, accessed, status }) {
  return (
    <div>
      <div className='h-16 relative left-5 text-main-black text-sm font-semibold flex items-center justify-between'>
        <td className=''>
          <Checkbox />
        </td>
        <td>
          <div className='flex items-center font-medium'>
            <img src={image} alt='profile' className='w-10 h-10 rounded-full mr-3.5' />
            {name}
          </div>
        </td>
        <td>{grade}</td>
        <td>{parents}</td>
        <td>{accessed}</td>
        <td className='text-xs'>
          <div
            className='rounded flex items-center justify-center'
            style={
              status === 'Active'
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
            {status}
          </div>
        </td>
        <td>
          <Crumbs />
        </td>
      </div>
    </div>
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
