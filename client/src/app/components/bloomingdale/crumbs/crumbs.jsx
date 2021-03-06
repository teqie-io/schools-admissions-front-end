import React from 'react'
import clsx from 'clsx'

export default function BloomCrumbs({ data }) {
  return (
    <div className='w-screen flex justify-center items-center mt-16 border-b'>
      {data.map((item, key) => (
        <div
          className={clsx(
            'text-base font-semibold flex items-center mr-4 border-b-4 border-white pb-2.5 pl-2.5 pr-2.5',
            item.active === 'Active' && 'border-main-blue'
          )}
          key={key}
        >
          {item.active === 'Done' && <Done />}
          {item.name}
        </div>
      ))}
    </div>
  )
}

const Done = () => {
  return (
    <svg width='20' height='20' className='mr-2' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.66602 10C1.66602 5.39763 5.39698 1.66667 9.99935 1.66667C12.2095 1.66667 14.3291 2.54464 15.8919 4.10744C17.4547 5.67025 18.3327 7.78986 18.3327 10C18.3327 14.6024 14.6017 18.3333 9.99935 18.3333C5.39698 18.3333 1.66602 14.6024 1.66602 10ZM9.77435 13.0083L13.5827 8.00834V7.98334C13.7643 7.74516 13.805 7.42819 13.6896 7.15182C13.5741 6.87545 13.32 6.68168 13.0229 6.64349C12.7258 6.60529 12.431 6.72849 12.2493 6.96667L9.09935 11.1333L7.74102 9.4C7.55792 9.1648 7.26325 9.04515 6.96801 9.08612C6.67277 9.12709 6.42182 9.32245 6.30968 9.59862C6.19754 9.87479 6.24125 10.1898 6.42435 10.425L8.45768 13.0167C8.6167 13.2179 8.85953 13.3347 9.11602 13.3333C9.37393 13.3327 9.61702 13.2127 9.77435 13.0083Z'
        fill='#00a86b'
      />
    </svg>
  )
}
