import React, { useState } from 'react'
import clsx from 'clsx'

import { General, Campuses, Admins, PlanBilling, ReportIssues, Data, Integrations } from '@components/company-settings'
import { CompanyTabs } from '@stories'
import './company-settings.scss'

const dataTypes = ['General', 'Campuses', 'Users', 'Plan & Billing', 'Reports / Issues', 'Data', 'Integrations']

const componentRender = [
  { type: 'General', component: (key) => <General key={key} /> },
  { type: 'Campuses', component: (key) => <Campuses key={key} /> },
  { type: 'Users', component: (key) => <Admins key={key} /> },
  { type: 'Plan & Billing', component: (key) => <PlanBilling key={key} /> },
  { type: 'Reports / Issues', component: (key) => <ReportIssues key={key} /> },
  { type: 'Data', component: (key) => <Data key={key} /> },
  { type: 'Integrations', component: (key) => <Integrations key={key} /> }
]

export default function CompanySettings({ burger }) {
  const [typeState, setTypeState] = useState(dataTypes && dataTypes[0])

  return (
    <div className={clsx('company-settings pr-16', burger ? 'pl-80' : 'pl-40')}>
      <h1 className='namepage'>Company Settings</h1>
      <div className='flex items-center w-full mb-12'>
        <CompanyTabs types={dataTypes} setTypeState={setTypeState} typeState={typeState} />
      </div>
      {componentRender.map((item, key) => item.type === typeState && item.component(key))}
    </div>
  )
}
