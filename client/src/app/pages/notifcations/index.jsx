import React, { useState } from 'react'
import clsx from 'clsx'

import './notifcations.scss'

import { CompanyTabs } from '@stories'
import { NavLinks } from '@components/header'
import { dataLinks } from '@entities/routes'
import Accordion from '@components/accordion/accordion'
import Notifications from '@components/notifications/notifications'

const dataTypes = ['Admissions', 'Finance', 'School Management', 'Operations']

export default function NotifcationsPage({ burger }) {
  const [typeState, setTypeState] = useState(dataTypes && dataTypes[0])

  const applicationData = [
    {
      title: 'When new eniqiry is created',
      person: [
        { label: 'Karthik', role: false },
        { label: 'Admissions Manager', role: true },
        { label: 'Kogi', role: false }
      ]
    },
    {
      title: 'When Enquiry is assigned to you',
      person: [
        { label: 'Karthik', role: false },
        { label: 'Admissions Manager', role: true },
        { label: 'Kogi', role: false }
      ]
    },
    {
      title: 'When an enquiry schduled a visit',
      person: ['Karthik'],
      person: [
        { label: 'Person check', role: false },
        { label: 'Admissions Manager', role: true },
        { label: 'Role check', role: true }
      ]
    }
  ]

  return (
    <div className={clsx('test pr-24', burger ? 'pl-80' : 'pl-40')}>
      <NavLinks urls={dataLinks.notificationsLinks} />
      <h1 className='namepage'>Notifcations</h1>
      <div className='mb-12'>
        <CompanyTabs types={dataTypes} setTypeState={setTypeState} typeState={typeState} />
      </div>
      <div className='notifications__items'>
        <Accordion title='Enquiry'>
          <Notifications data={applicationData} />
        </Accordion>
        <Accordion title='Application'>
          <Notifications data={applicationData} />
        </Accordion>
        <Accordion title='Payments'>
          <Notifications data={applicationData} />
        </Accordion>
        <Accordion title='Tasks'>
          <Notifications data={applicationData} />
        </Accordion>
        <Accordion title='Calendar'>
          <Notifications data={applicationData} />
        </Accordion>
      </div>
    </div>
  )
}
