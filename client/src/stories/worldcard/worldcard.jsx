import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { graphstats, calls } from '../../app/components/header/search/sub-components/nav-app/image'

export default function WorldCard({ link, img, label, comingSoon, size }) {
  return size === 'big' ? (
    <div
      className={clsx(
        'flex flex-col transform  transition-all mb-10 items-center overflow-ellipsis justify-center rounded-xl shadow-mini',
        comingSoon ? 'cursor-not-allowed opacity-70' : 'cursor-pointer hover:-translate-y-1'
      )}
      to={link}
      style={{ width: '9.938rem', height: '10.188rem' }}
    >
      <img src={img} alt='settings' className={` ${img === graphstats || img === calls ? 'w-20' : 'w-14'} h-14`} />
      <p className='overflow-ellipsis overflow-hidden whitespace-pre w-26 text-center text-sm mt-4'>{label}</p>
      {comingSoon && (
        <p className='absolute bottom-3.5 overflow-ellipsis overflow-hidden whitespace-pre w-26 text-center text-sm mt-4 opacity-50'>
          Coming soon...
        </p>
      )}
    </div>
  ) : (
    <div
      className={clsx(
        'flex flex-col transform transition-all mb-4 items-center overflow-ellipsis justify-center w-28 h-28 rounded-xl shadow-mini',
        comingSoon ? 'cursor-not-allowed opacity-70' : 'cursor-pointer hover:-translate-y-1'
      )}
      to={link}
    >
      <img src={img} alt='settings' className={` ${img === graphstats || img === calls ? 'w-20' : 'w-14'} h-14`} />
      <p className='overflow-ellipsis overflow-hidden whitespace-pre w-26 text-center text-sm mt-2'>
        {comingSoon ? ' Coming soon...' : label}
      </p>
    </div>
  )
}

WorldCard.propTypes = {
  link: PropTypes.string,
  img: PropTypes.string,
  label: PropTypes.string,
  comingSoon: PropTypes.bool,
  size: PropTypes.string
}
