import React from 'react'
import PropTypes from 'prop-types'

import '../../../app/pages/finance-module/feebooks/feebooks.scss'
import FeeBookCard from '../../../app/components/finance-module/feebook-card/feebook-card.jsx'

export default function FeeBooks() {
  return (
    <div className='flex'>
      <FeeBookCard title='IB' date='2021-22' variant='approved' />
      <FeeBookCard title='CBSE ' date='2021-22' variant='pending' />
      <FeeBookCard title='IGCSE' date='2021-22' variant='draft' />
      <FeeBookCard title='IB Fee Book' date='2020-21' />
      <FeeBookCard type='button' />
    </div>
  )
}

FeeBooks.propTypes = {
  /**  @param Type An array of objects.
   * @param Object Keys for objects - title: string, date: string, variant: string, link: string
   * @param variant Key variations - approved, pending, draft, ''
   * @param Example [
  { title: 'IB', date: '2021-22', variant: 'approved', link: '' },
  { title: 'CBSE', date: '2021-22', variant: 'pending', link: '' },
  { title: 'IGCSE', date: '2021-22', variant: 'draft', link: '' },
  { title: 'IB Fee Book', date: '2020-21', variant: '', link: '' }
]
   **/
  data: PropTypes.array
}
