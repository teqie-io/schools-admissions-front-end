import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import './accordions.scss'

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='accordion'>
      <div className='accordion-header' onClick={() => setIsOpen(!isOpen)}>
        <button className={clsx('accordion-header_btn', isOpen ? 'accordion-header_btn--open' : '', 'none-after')}>
          <Arrow isOpen={isOpen} />
        </button>
        <h3 className='accordion-header_title'>{title}</h3>
      </div>
      {isOpen && <div className='accordion-content'>{children}</div>}
    </div>
  )
}

export default Accordion

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
}

const Arrow = ({ isOpen }) => {
  return (
    <svg
      className={clsx('transform transition-all', isOpen ? 'rotate-90 border border-main-blue' : 'rotate-0')}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M8.55 2.5L7 4.05L14.95 12L7 19.95L8.55 21.5L18 12L8.55 2.5Z' fill='#404EED' />
    </svg>
  )
}
