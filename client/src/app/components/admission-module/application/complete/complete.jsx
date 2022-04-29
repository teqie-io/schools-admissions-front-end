import React from 'react'

import { Button } from '../../../../../stories'
import completed from './completed.svg'
import './complete.scss'

export default function Complete() {
  const styles = {
    button: { paddingLeft: '2.5rem', paddingRight: '2.5rem', marginRight: '3.75rem' }
  }

  return (
    <div className='application-complete'>
      <img className='mb-10' src={completed} alt='complete' />
      <p className='font-semibold text-base text-black mb-10'>Congrats Welcome to _______ Family</p>
      <div className='flex'>
        <Button buttonStyle='outlined' buttonSize='medium' text='Setup Bus Route' customStyle={styles.button} />
        <Button buttonStyle='outlined' buttonSize='medium' text='Order Stationery' customStyle={styles.button} />
      </div>
    </div>
  )
}
