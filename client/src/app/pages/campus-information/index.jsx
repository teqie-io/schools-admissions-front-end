import React, { useState } from 'react'
import clsx from 'clsx'

import { General, RolesPermissions } from '@components/campus-information'
import { NavLinks } from '@components/header'
import { dataLinks } from '@entities/routes'
import { CompanyTabs, Button } from '@stories'
import './campus-information.scss'

export default function CampusInformation({ burger }) {
  const dataTypes = ['General', 'Grades of Programms', 'Roles and Permissions']
  const [typeState, setTypeState] = useState(dataTypes && dataTypes[0])

  const componentRender = [
    { type: 'General', component: (key) => <General key={key} /> },
    { type: 'Grades of Programms', component: (key) => <div key={key} /> },
    { type: 'Roles and Permissions', component: (key) => <RolesPermissions key={key} /> }
  ]

  return (
    <div className={clsx('campus-information pr-24', burger ? 'pl-24 1400px:pl-80' : 'pl-24 1400px:pl-40')}>
      <NavLinks urls={dataLinks.campusInfoLinks} />
      <div className='flex items-center justify-between'>
        <h1 className='namepage'>
          {typeState === 'General'
            ? 'Nalanda Vidyanikethan Primary'
            : typeState === 'Grades of Programms'
            ? 'Grades of Programms'
            : 'Roles and Permissions'}
        </h1>
        {typeState === 'Roles and Permissions' && <Button text='Create a Role' className='relative bottom-2 text-sm' />}
      </div>
      <div className='flex items-center w-full mb-12'>
        <CompanyTabs types={dataTypes} setTypeState={setTypeState} typeState={typeState} />
      </div>
      {componentRender.map((item, key) => item.type === typeState && item.component(key))}
    </div>
  )
}
