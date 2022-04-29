import React from 'react'
import { Link } from 'react-router-dom'

export default function Data() {
  const data = [
    {
      title: 'Export Campus Data',
      link: 'campus-data.csv',
      body: 'Download and preview data across various campuses. Get insights like user-activity, transactions, inquiries and much more.'
    },
    {
      title: 'Export User Data',
      link: 'user-data.csv',
      body: 'Download and preview data across various campuses. Get insights like user-activity, transactions, inquiries and much more.'
    },
    {
      title: 'Export Admissions Data',
      link: 'admissions-data.csv',
      body: 'Download and preview data across various campuses. Get insights like user-activity, transactions, inquiries and much more.'
    }
  ]

  return (
    <div>
      {data.map((item, key) => (
        <div className='mb-10' key={key}>
          <h1 className='font-bold text-base mb-2'>{item.title}</h1>
          <p className=' font-medium text-xs mb-6' style={{ color: '#6D7175' }}>
            {item.body}
          </p>
          <Link
            to={`/download/${item.link}`}
            className='text-sm ml-1 font-mediun pt-2 pb-2 pr-4 justify-center pl-4 flex w-40 rounded-lg'
            style={{ background: '#F6F6F7', color: '#3A8B93' }}
            target='_blank'
            download
          >
            <Download />
            <p className='ml-1'>Download CSV</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

const Download = () => {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect x='3.33301' y='15' width='13.3333' height='1.66667' rx='0.833333' fill='#3A8B93' />
      <rect
        x='3.33301'
        y='16.667'
        width='3.33333'
        height='1.66667'
        rx='0.833333'
        transform='rotate(-90 3.33301 16.667)'
        fill='#3A8B93'
      />
      <rect
        x='15'
        y='16.667'
        width='3.33333'
        height='1.66667'
        rx='0.833333'
        transform='rotate(-90 15 16.667)'
        fill='#3A8B93'
      />
      <path
        d='M9.99994 12.4997C9.82718 12.501 9.65828 12.4486 9.51661 12.3497L6.18328 9.99972C5.80926 9.7344 5.71989 9.21676 5.98328 8.84139C6.11084 8.65935 6.30584 8.53582 6.52493 8.49826C6.74402 8.4607 6.96903 8.51223 7.14994 8.64139L9.99994 10.6331L12.8333 8.49972C13.2015 8.22358 13.7238 8.2982 13.9999 8.66639C14.2761 9.03458 14.2015 9.55691 13.8333 9.83306L10.4999 12.3331C10.3557 12.4412 10.1803 12.4997 9.99994 12.4997V12.4997Z'
        fill='#3A8B93'
      />
      <path
        d='M10.0003 10.8333C9.54009 10.8333 9.16699 10.4602 9.16699 10V3.33333C9.16699 2.8731 9.54009 2.5 10.0003 2.5C10.4606 2.5 10.8337 2.8731 10.8337 3.33333V10C10.8337 10.4602 10.4606 10.8333 10.0003 10.8333Z'
        fill='#3A8B93'
      />
    </svg>
  )
}
