import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { admissionsUrls } from '../../../entities/data'
import { dot } from '../../../static/image'
import './nav-links.scss'

export default function NavLinks({ urls, idLocation }) {
  return (
    urls.length > 1 && (
      <div className='header-navlink'>
        {urls.map(
          (item, key) =>
            item.path !== undefined && (
              <NavLink
                to={item.path}
                className={clsx(
                  'header-navlink-link',
                  !idLocation && item.active ? 'header-navlink-link_active' : null
                )}
                key={key}
              >
                {item.path === '/' ? null : <img src={dot} alt='dot' />} {item.name}
              </NavLink>
            )
        )}
        {idLocation &&
          admissionsUrls.map((item) =>
            item.url.search(idLocation) !== -1 && idLocation !== 'application' ? (
              <NavLink
                to={item.url}
                className={clsx('header-navlink-link', 'header-navlink-link_active')}
                key={item.key}
              >
                <img src={dot} alt='dot' /> {item.name}
              </NavLink>
            ) : null
          )}
        {idLocation === 'application' && (
          <NavLink to='/application/application' className={clsx('header-navlink-link', 'header-navlink-link_active')}>
            <img src={dot} alt='dot' /> Application
          </NavLink>
        )}
      </div>
    )
  )
}

NavLinks.propTypes = {
  urls: PropTypes.array
}
