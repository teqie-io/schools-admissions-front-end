import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import clsx from 'clsx'

import EditPanel from '../edit-panel/edit-panel.jsx'
import { Button } from '../../../stories'
import './footer.scss'

export default function Footer() {
  const [visiblePanel, setVisiblePanel] = useState(false)

  const styles = { span: { fontSize: 13 }, button: { color: '#FF4842' } }

  return (
    <div className='footer'>
      <div className={clsx(visiblePanel ? 'pointer-events-none' : 'pointer-events-auto')}>
        <EditPanel visible={visiblePanel} setVisible={setVisiblePanel} />
      </div>
      <Fade clear duration={300}>
        <div className='footer-row'>
          <button className='footer-row-button' onClick={() => setVisiblePanel(!visiblePanel)}>
            <span>3</span>
            <span style={styles.span}>Edits</span>
          </button>
          <Button buttonStyle='text' buttonSize='large' text='Cancel' customStyle={styles.button} />
          <Button buttonStyle='text' buttonSize='large' text='Save as Draft' />
          <Button text='Send for Approval' buttonSize='large' />
        </div>
      </Fade>
    </div>
  )
}
