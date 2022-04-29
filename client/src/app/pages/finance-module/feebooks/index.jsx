import React, { useState } from 'react'
import clsx from 'clsx'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'

import { dataLinks } from '@entities/routes'
import { NavLinks } from '@components/header'
import { FeeBookCard, FeeBookModal } from '@components/finance-module'
import './feebooks.scss'

export default function FeeBooks({ burger }) {
  const [open, openModal] = useState(false)

  const isOpen = () => {
    openModal(!open)
  }

  return (
    <React.Fragment>
      <FeeBookModal open={open} isOpen={isOpen} />
      <div className={clsx('feebooks', burger ? 'ml-80' : 'ml-40')}>
        <Fade clear duration={300}>
          <NavLinks urls={dataLinks.feebooksLinks} />
          <h1 className='namepage'>Fee Books</h1>
          <p className='feebooks_p'>Academic Year 2021-22</p>
          <div className='flex'>
            <FeeBookCard title='IB' date='2021-22' variant='approved' />
            <FeeBookCard title='CBSE ' date='2021-22' variant='pending' />
            <FeeBookCard title='IGCSE' date='2021-22' variant='draft' />
            <FeeBookCard type='button' onClick={isOpen} />
          </div>
          <h3 className='feebooks_h3'>Previous Feebooks</h3>
          <p className='feebooks_p'>Academic Year 2019-20</p>
          <div className='flex'>
            <FeeBookCard title='IB Fee Book' date='2020-21' />
            <FeeBookCard title='CBSE' date='2020-21' />
            <FeeBookCard title='IGCSE' date='2020-21' />
          </div>
        </Fade>
      </div>
    </React.Fragment>
  )
}

FeeBooks.propTypes = {
  burger: PropTypes.bool
}
