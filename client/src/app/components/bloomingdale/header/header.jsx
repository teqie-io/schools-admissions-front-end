import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import './header.scss'

export default function BloomHeader() {
  const location = useLocation()

  const [crumbs, setCrumbs] = useState(false)

  useEffect(() => {
    location.pathname.search('bloomingdale-dashboard') !== -1 ? setCrumbs(true) : setCrumbs(false)
  }, [location])

  return (
    <div className='w-screen h-12 flex items-center justify-between pl-7 pr-7 fixed top-0 bg-white z-10'>
      <div className='flex items-center'>
        <NavLink to='/bloomingdale-dashboard'>
          <div className='bloom-logo' />
        </NavLink>
        {crumbs && (
          <div className='flex items-center ml-20'>
            <button className='transition-all text-sm font-semibold none-after hover:text-main-blue'>Home</button>
          </div>
        )}
      </div>
      <div className='flex items-center cursor-pointer'>
        <p className='font-medium text-sm mr-2' style={{ color: '#96969a' }}>
          Naresh Kumar
        </p>
        <div
          className='w-8 h-8 rounded-full flex items-center justify-center text-xs'
          style={{ background: '#f5f4f7', color: '#5143e2' }}
        >
          Nr
        </div>
      </div>
    </div>
  )
}
