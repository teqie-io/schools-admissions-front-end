import React from 'react'
import { NavLink } from 'react-router-dom'

import { routes, adminRoutes } from '@entities/routes.js'
import './min-navbar.scss'

export default function MinNavBar({ admin }) {
  const dataRoutes = admin ? adminRoutes : routes
  return (
    <div className='panel-min-navbar'>
      {dataRoutes.map(
        (route, key) =>
          route.type === 'link' && (
            <NavLink
              key={key}
              className='panel-min-navbar_link'
              activeClassName='panel-min-navbar_link-active'
              to={route.path}
            >
              <img src={route.icon} />
            </NavLink>
          )
      )}
    </div>
  )
}
