import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Fade from 'react-reveal/Fade'

import { MinPanel, BigPanel } from '@components/basic-panel'

export default function BasicPanel({ burger, isOpen }) {
  const [admin, setAdmin] = useState(false)

  return (
    <div className='z-50'>
      {burger ? (
        <BigPanel admin={admin} setAdmin={setAdmin} isOpen={isOpen} />
      ) : (
        <MinPanel admin={admin} setAdmin={setAdmin} />
      )}
      <Fade clear duration={200} when={burger}>
        <div
          className={clsx('basic-panel-closed', burger ? 'basic-panel-closed_linear' : '')}
          onClick={() => isOpen(false)}
        />
      </Fade>
    </div>
  )
}

BasicPanel.propTypes = {
  burger: PropTypes.bool
}
