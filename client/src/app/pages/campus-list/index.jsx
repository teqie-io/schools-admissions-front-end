import React, { useState } from 'react'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'

import './campus-list.scss'
import { mainavatar } from '@image'
import Table from '@components/campus-list/table'
import { NavLinks } from '@components/header'
import { dataLinks } from '@entities/routes'
import { Button } from '@stories'

export default function CampusList({ burger }) {
  const history = useHistory()

  const theadData = [false, 'Campus Name', 'Campus Code', 'Active', false]
  const tbodyData = [
    {
      avatar: mainavatar,
      name: 'Galileo Campus',
      location: 'Fish pond road, Penamalauru',
      code: 'GFDGNJJN4',
      status: 'active'
    },
    {
      avatar: mainavatar,
      name: 'Galileo Campus',
      location: 'Fish pond road, Penamalauru',
      code: 'GFDGNJJN4',
      status: 'disabled'
    },
    {
      avatar: mainavatar,
      name: 'Galileo Campus',
      location: 'Fish pond road, Penamalauru',
      code: 'GFDGNJJN4',
      status: 'draft'
    }
  ]
  return (
    <div className={clsx('campus-list pr-24', burger ? 'pl-80' : 'pl-40')}>
      <NavLinks urls={dataLinks.campusListLinks} />
      <div className='w-full flex items-center justify-between'>
        <h1 className='namepage'>Campuses</h1>
        <div className='flex items-center relative bottom-2.5'>
          <Button text='Edit Campus' buttonStyle='outlined' onClick={() => history.push('/detail/company-edit')} />
          <Button
            text='Create a Campus'
            customStyle={{ marginLeft: '1rem' }}
            onClick={() => history.push('/detail/company')}
          />
        </div>
      </div>
      <Table headerData={theadData} bodyData={tbodyData} />
    </div>
  )
}
