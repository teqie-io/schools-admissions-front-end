import React from 'react'
import { Link } from 'react-router-dom'

import document from './document.svg'
import giikilogo from './giikilogo.svg'

export default function PlanBilling() {
  const tableData = [
    { invoice: 'Invoice-382464763ASD82378024', date: '02 August, 2019' },
    { invoice: 'Invoice-521DHAUD8371230123SDH', date: '12 September, 2020' }
  ]

  return (
    <div>
      <div className='w-full border flex flex-col p-8' style={{ height: '19.188rem' }}>
        <div className='w-full flex items-center justify-between'>
          <div className='flex items-center'>
            <img src={giikilogo} alt='plan' />
            <p className='font-bold text-2xl ml-2'>Starter Plan</p>
          </div>
          <div className='flex items-center'>
            <p className='text-sm font-medium' style={{ color: '#0E353D' }}>
              Subscription end date
            </p>
            <div className='pr-3 pb-1 pl-3 pt-1 text-sm rounded-md mr-4 ml-4' style={{ background: '#FFD79D' }}>
              Aug 25, 2025
            </div>
            <div
              className='pr-3 pb-1 pl-3 pt-1 rounded-md text-sm text-button-disable'
              style={{ background: 'rgba(145, 158, 171, 0.24)' }}
            >
              Renew
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-between'>
          <h1 className='mt-14 mb-2 text-5xl font-bold'>$25</h1>
          <h1 className='mt-14 mb-2 text-5xl font-bold'>250</h1>
        </div>
        <div className='w-full flex items-center justify-between'>
          <p className='font-bold text-base'>per student per month</p>
          <p className='font-bold text-base'>(200 students, 50 staff)</p>
        </div>
        <div className='w-full flex items-end justify-end'>
          <button className='text-main-blue none-after text-sm font-bold'>manage</button>
        </div>
      </div>
      <h1 className='font-bold text-2xl mt-12 mb-10'>Recent Invoice</h1>
      <table className='w-full'>
        <thead>
          <tr className='font-medium text-xs' style={{ color: '#5C5F62' }}>
            <th align='left'>Invoice Name</th>
            <th align='left'>Generated On</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, key) => (
            <React.Fragment key={key}>
              <tr className='h-8' />
              <tr className='font-medium text-sm'>
                <td>{item.invoice}</td>
                <td>
                  <div className='flex items-center'>
                    <p className='w-52 whitespace-pre overflow-hidden overflow-ellipsis'>{item.date}</p>
                    <Link to={`/download/${item.invoice}.txt`} target='_blank' download>
                      <Download />
                    </Link>
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <h1 className='font-bold text-2xl mt-11 mb-6'>Contract</h1>
      <div
        className='pl-4 pt-2 pb-2 rounded-lg mb-10 flex items-center'
        style={{ width: '32rem', height: '3.125rem', background: '#FFF5EA' }}
      >
        <img src={document} alt='document' />
        <p className='text-sm font-medium ml-1' style={{ color: '#E1B878' }}>
          Last updated on 26 August 2020.
        </p>
        <Link
          to={`/download/contract.txt`}
          className='text-sm ml-1 font-bold underline'
          style={{ color: '#916A00' }}
          target='_blank'
          download
        >
          Click here to download.
        </Link>
      </div>
    </div>
  )
}

const Download = () => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect x='4' y='18' width='16' height='2' rx='1' fill='#404EED' />
      <rect x='4' y='20' width='4' height='2' rx='1' transform='rotate(-90 4 20)' fill='#404EED' />
      <rect x='18' y='20' width='4' height='2' rx='1' transform='rotate(-90 18 20)' fill='#404EED' />
      <path
        d='M12 15.0001C11.7927 15.0016 11.59 14.9387 11.42 14.8201L7.42003 12.0001C6.97121 11.6817 6.86396 11.0605 7.18003 10.6101C7.3331 10.3916 7.56711 10.2434 7.83001 10.1983C8.09292 10.1532 8.36294 10.2151 8.58003 10.3701L12 12.7601L15.4 10.2001C15.8419 9.86869 16.4687 9.95823 16.8 10.4001C17.1314 10.8419 17.0419 11.4687 16.6 11.8001L12.6 14.8001C12.4269 14.9299 12.2164 15.0001 12 15.0001Z'
        fill='#404EED'
      />
      <path
        d='M12 13C11.4477 13 11 12.5523 11 12V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V12C13 12.5523 12.5523 13 12 13Z'
        fill='#404EED'
      />
    </svg>
  )
}
