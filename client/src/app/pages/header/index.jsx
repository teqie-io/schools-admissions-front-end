import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { icmenu } from '@image'
import { Search } from '@components/header'
import './header.scss'

export default function Header({ isOpen, burger }) {
  return (
    <header className={clsx('header', burger ? 'header-open' : 'header-closed')}>
      <button className='header-burger' onClick={isOpen}>
        <img src={icmenu} alt='burger' className='w-6 h-6' />
      </button>
      <Search burger={burger} />
    </header>
  )
}

Header.propTypes = {
  isOpen: PropTypes.func,
  burger: PropTypes.bool
}
