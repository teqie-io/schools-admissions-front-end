import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import clsx from 'clsx'

import { icchevronright } from '@image'
import { routes, adminRoutes } from '@entities/routes.js'
import './navbar.scss'

export default function NavBar({ admin }) {
  const location = useLocation()
  const dataRoutes = admin ? adminRoutes : routes

  return (
    <div className='basic-panel-navbar'>
      {dataRoutes.map((route, key) =>
        route.type === 'span' ? (
          <span key={key} className='basic-panel-navbar_name'>
            {route.name}
          </span>
        ) : (
          <React.Fragment key={key}>
            <NavLink
              className='basic-panel-navbar_link'
              activeClassName='basic-panel-navbar_link-active'
              to={route.path}
            >
              <img src={route.icon} />
              {route.name}
              {route.multiPath && (
                <img
                  className={clsx('rotate', !location.pathname.search(route.path) ? 'rotate_90' : 'rotate_0')}
                  src={icchevronright}
                />
              )}
            </NavLink>
            {!location.pathname.search(route.path)
              ? route.multiPath && (
                  <div className='basic-panel-navbar_actives'>
                    {route.multiPath.map((route, key) => {
                      return (
                        <NavLink
                          key={key}
                          className='basic-panel-navbar_link_small'
                          activeClassName='basic-panel-navbar_link-active'
                          to={route.path}
                        >
                          {route.name}
                        </NavLink>
                      )
                    })}
                  </div>
                )
              : null}
          </React.Fragment>
        )
      )}
    </div>
  )
}
