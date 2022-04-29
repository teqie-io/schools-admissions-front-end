import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { NavLink, useLocation } from 'react-router-dom'

import './nav-tabs.scss'

export default function NavTabs({ tabs }) {
  const location = useLocation()

  return (
    <>
      {tabs.length > 1 && (
        <div className='header-tabs'>
          {tabs.map(
            (item, key) =>
              item.path !== undefined && (
                <NavLink
                  className={clsx(
                    'header-tabs-link',
                    location.pathname.search(item.type) !== -1 ? 'header-tabs-link_active' : null
                  )}
                  to={item.path}
                  key={key}
                >
                  {item.name}
                </NavLink>
              )
          )}
        </div>
      )}
    </>
  )
}

NavTabs.propTypes = {
  tabs: PropTypes.array
}
