import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'
import './tasks.scss'

export default function Tasks({ burger }) {
  return (
    <div className={clsx('tasks-table grid-container__item--2', burger ? 'tasks-table_open' : 'tasks-table_closed')}>
      <div className='tasks-table__title'>Tasks</div>
    </div>
  )
}

Tasks.propTypes = {
  burger: PropTypes.bool
}
