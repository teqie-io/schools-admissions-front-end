import React, { useState } from 'react'
import Zoom from 'react-reveal/Zoom'
import clsx from 'clsx'

import EditPanelContent from './edit-panel-content.jsx'
import { mainavatar } from '../../static/image'
import './edit-panel.scss'

export default function EditPanel({ visible, setVisible }) {
  const tabTypes = ['Condenced Log', 'Detailed Log', 'Versions']
  const [tabType, setTabType] = useState(tabTypes && tabTypes[0])

  const tabRenderComponent = [
    { type: 'Condenced Log', component: (key) => <CondencedLog key={key} /> },
    { type: 'Detailed Log', component: (key) => <div key={key} /> },
    { type: 'Versions', component: (key) => <div key={key} /> }
  ]

  return (
    <Zoom bottom duration={700} when={visible}>
      <div className={clsx('edit-panel', visible ? 'pointer-events-auto' : 'pointer-events-none hidden')}>
        <div className='flex items-center justify-between'>
          <h1 className='font-medium text-4xl'>Edits</h1>
          <button onClick={() => setVisible(false)}>
            <Close />
          </button>
        </div>
        <div>
          {tabTypes.map((type, key) => (
            <button
              className={clsx('edit-panel--tab none-after', type === tabType && 'edit-panel--tab_active')}
              key={key}
              onClick={() => setTabType(type)}
            >
              {type}
            </button>
          ))}
        </div>
        {tabRenderComponent.map((item, key) => item.type === tabType && item.component(key))}
      </div>
    </Zoom>
  )
}

const CondencedLog = () => {
  return (
    <div className='mt-4 overflow-auto w-full' style={{ height: 'calc(100vh - 14rem)', width: '26.8rem' }}>
      {data.map((item, key) => (
        <React.Fragment key={key}>
          <p className='text-xs font-medium mb-3' style={{ color: 'rgba(99, 115, 129, 0.6)' }}>
            {item.date}
          </p>
          <EditPanelContent cards={item.cards} />
        </React.Fragment>
      ))}
    </div>
  )
}

const Close = () => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M16 1.4L14.6 0L8 6.6L1.4 0L0 1.4L6.6 8L0 14.6L1.4 16L8 9.4L14.6 16L16 14.6L9.4 8L16 1.4Z'
        fill='#2F80ED'
      />
    </svg>
  )
}

const data = [
  {
    date: 'Monday',
    cards: [
      {
        title: 'Draft Name',
        persona: 'Subhash A',
        image: mainavatar,
        edits: [
          { type: 'Add', date: '11:46 AM', roleName: 'Role name Security', title: 'New Role' },
          { type: 'Edit', date: '11:46 AM', roleName: 'Role name Security', title: 'New Role' },
          { type: 'Delete', date: '11:46 AM', roleName: 'Role name Security', title: 'New Role' }
        ]
      },
      {
        title: 'Draft Name',
        persona: 'Subhash A',
        image: mainavatar,
        edits: [
          { type: 'Add', date: '11:46 AM', roleName: 'Role name Security', title: 'New Role' },
          { type: 'Edit', date: '11:46 AM', roleName: 'Role name Security', title: 'New Role' },
          { type: 'Edit', date: '11:46 AM', roleName: 'Role name Security', title: 'New Role' },
          { type: 'Delete', date: '11:46 AM', roleName: 'Role name Security', title: 'New Role' }
        ]
      },
      {
        title: 'Draft Name',
        persona: 'Subhash A',
        image: mainavatar,
        edits: [{ type: 'Delete', date: '11:46 AM', roleName: 'Role name Security', title: 'New Role' }]
      }
    ]
  }
]
