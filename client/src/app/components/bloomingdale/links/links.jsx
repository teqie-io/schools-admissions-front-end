import React from 'react'
import { NavLink } from 'react-router-dom'

import './links.scss'

export default function BloomLinks() {
  return (
    <div className='bloom-links'>
      <h1 className='font-semibold text-lg mb-5'>Quick Links</h1>
      <div className='bloom-links-card'>
        <p className='font-semibold text-lg'>Apply Now</p>
        <p className='text-sm mb-8 font-semibold' style={{ color: '#d7d7ec' }}>
          Apply for Admission
        </p>
        <NavLink to='/bloomingdale-details' className='bloom-links-link flex items-center justify-center'>
          Submit Application
        </NavLink>
      </div>
      <div className='bloom-links-card'>
        <p className='font-semibold text-lg'>Campus Tour</p>
        <p className='text-sm mb-8 font-semibold' style={{ color: '#d7d7ec' }}>
          Visit out School
        </p>
        <button className='bloom-links-link'>Schedule a Tour</button>
      </div>
    </div>
  )
}
