import React from 'react'
import clsx from 'clsx'
import { NavLink, useLocation } from 'react-router-dom'

import { admissionsUrls } from '../../../entities/data'
import { unactive, active, done } from './image'
import './admissions-links.scss'

export default function AdmissionsLinks() {
  const location = useLocation()
  const urls = admissionsUrls

  const checkUrl = () => {
    let currentUrl
    urls.map((item) => location.pathname.search(item.url) !== -1 && (currentUrl = item.key))

    return currentUrl - 1
  }

  return (
    <div className='flex justify-between mb-5'>
      {urls.map((item) => {
        const imgSrc =
          (item.key === 0 ||
          (location.pathname.search(item.url) !== -1 && item.key === 3) ||
          (location.pathname.search(item.url) !== -1 && item.key === 6)
            ? done
            : checkUrl() >= item.key && done) ||
          (location.pathname.search(item.url) !== -1 && active) ||
          unactive
        const activeLinkClass = location.pathname.search(item.url) !== -1 && 'admissions-links_active'
        const checkLinkClass =
          item.key === 0 ? 'admissions-links_done' : checkUrl() >= item.key && 'admissions-links_done'

        return (
          item.key !== 7 && (
            <NavLink className={clsx('admissions-links', activeLinkClass, checkLinkClass)} to={item.url} key={item.key}>
              <img className='2xl:w-5 w-4 h-4 2xl:h-5 mr-1 2xl:mr-2' src={imgSrc} alt='' />
              {item.name}
            </NavLink>
          )
        )
      })}
    </div>
  )
}
