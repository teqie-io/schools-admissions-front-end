import React from 'react'
import { Fade } from 'react-reveal'

import { Button } from '../../../../../../stories'

export default function Footer() {
  const styles = { span: { fontSize: 13 }, button: { color: '#FF4842' } }
  return (
    <div className='footer-field'>
      <Fade clear duration={300}>
        <div className='footer-field-row'>
          <button className='footer-field-row-button'>
            <span>2</span>
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
