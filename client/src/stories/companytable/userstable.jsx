import React from 'react'

export default function UsersTable({ image, name, role, date, email, active }) {
  return (
    <div className='flex items-center justify-between w-full'>
      {' '}
      <div className='font-medium text-sm flex items-center justify-between w-full'>
        <div>
          <img className='w-8 h-8 rounded-full' src={image} alt='admins' />
        </div>
        <td>{name}</td>
        <td>{role}</td>
        <td>{date}</td>
        <td>{email}</td>
        <td style={active === 'active' ? { color: '#3A8B93' } : { color: '#6C0F00' }}>
          {active === 'active' ? 'Active' : 'Inactive'}
        </td>
      </div>
    </div>
  )
}
