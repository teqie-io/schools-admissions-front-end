import React from 'react'
import PropTypes from 'prop-types'

export default function PlanBillingTable({ data }) {
  return (
    <div>
      <h1 className='font-bold text-2xl mt-12 mb-10'>Recent Invoice</h1>
      <table className='w-full'>
        <thead>
          <tr className='font-medium text-xs' style={{ color: '#5C5F62' }}>
            <th align='left'>Invoice Name</th>
            <th align='left'>Generated On</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => (
            <React.Fragment key={key}>
              <tr className='h-8' />
              <tr className='font-medium text-sm'>
                <td>{item.invoice}</td>
                <td>
                  <div className='flex items-center'>
                    <p className='w-52 whitespace-pre overflow-hidden overflow-ellipsis'>{item.date}</p>
                    <a to={`/download/${item.invoice}.txt`} className='cursor-pointer' target='_blank' download>
                      <Download />
                    </a>
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

PlanBillingTable.propTypes = {
  data: PropTypes.array
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
