import React, { useState } from 'react'
import clsx from 'clsx'

import { NavLinks } from '@components/header'
import { dataLinks } from '@entities/routes'
import Accordion from '@components/accordion/accordion'
import Task from '@components/task/task'
import './tasks-settings.scss'

export default function TasksSettings({ burger }) {
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
    <div className={clsx('tasks-settings pr-24', burger ? 'pl-24 1400px:pl-80' : 'pl-24 1400px:pl-40')}>
      <NavLinks urls={dataLinks.tasksSettibgLinks} />
      <div className='notifications__items'>
        <Accordion title='Enquiry'>
          <Task data={applicationData} />
        </Accordion>
        <Accordion title='Application'>
          <Task data={applicationData} />
        </Accordion>
      </div>
    </div>
  )
}
