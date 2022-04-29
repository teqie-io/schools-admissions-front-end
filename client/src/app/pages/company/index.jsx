import React, { useState } from 'react'
import clsx from 'clsx'

import { CompanyCard, CompanyTabs } from '@stories'
import './company.scss'

const dataTypes = ['Currently Active', 'Inactive', 'Upcoming Billings']

export default function Company({ burger }) {
  const [typeState, setTypeState] = useState(dataTypes && dataTypes[0])
  const [renderCard, setRenderCard] = useState([0, 1, 2])

  const styles = { button: { width: '9.813rem', height: '2.75rem', background: '#663174', color: '#F1F8F5' } }

  return (
    <div className={clsx('company pr-24', burger ? 'pl-80' : 'pl-40')}>
      <h1 className='namepage'>Company Management</h1>
      <div className='flex items-center justify-between w-full  mb-12'>
        <div>
          <CompanyTabs types={dataTypes} setTypeState={setTypeState} typeState={typeState} />
        </div>
        <button
          onClick={() => setRenderCard([...renderCard, Math.random()])}
          className='flex items-center justify-center rounded-lg'
          style={styles.button}
        >
          Create Company
        </button>
      </div>
      {renderCard.map((item, key) => (
        <CompanyCard key={key} />
      ))}
    </div>
  )
}
