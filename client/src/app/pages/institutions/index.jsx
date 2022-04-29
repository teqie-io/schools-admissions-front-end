import React from 'react'

import clsx from 'clsx'

import { GettingStart } from '@components/institutions'
import './institutions.scss'

export default function Institutions({ burger }) {
  return (
    <div className={clsx('institutions pr-24', burger ? 'pl-80' : 'pl-32')}>
      <GettingStart burger={burger} />
    </div>
  )
}
