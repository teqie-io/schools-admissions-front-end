import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { dot } from '../../app/static/image'
import './crumbs.scss'

export default function Crumbs({ urls }) {
  return (
    <div className='header-navlink'>
      {urls.map(
        (item, key) =>
          item.path !== undefined && (
            <div
              to={item.path}
              className={clsx('header-navlink-link', item.active ? 'header-navlink-link_active' : null)}
              key={key}
            >
              {item.path === '/' ? null : <img src={dot} alt='dot' />} {item.name}
            </div>
          )
      )}
    </div>
  )
}

Crumbs.propTypes = {
  urls: PropTypes.array
}
