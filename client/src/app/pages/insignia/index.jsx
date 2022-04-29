import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import './insignia.scss'

export default function Insignia({ burger }) {
  return <div className={clsx('insignia pr-28', burger ? '1400px:pl-69' : '1400px:pl-20')}>adadad</div>
}

Insignia.propTypes = {
  burger: PropTypes.bool
}
