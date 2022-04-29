import React from 'react'
import clsx from 'clsx'

import { widget } from '@image'
import { Button } from '@stories'
import './add-widget.scss'

export default function AddWidget({ burger }) {
  const styles = {
    widgetBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      textAlign: 'center',
      backgroundColor: '#F9FAFB',
      color: '#202223',
      fontWeight: 700,
      boxShadow: '0rem 0.063rem 0.125rem rgba(145, 158, 171, 0.24)',
      marginTop: 'auto'
    }
  }

  return (
    <div className={clsx('add-widget grid-container__item--8', burger ? 'add-widget_open' : 'add-widget_closed')}>
      <div className='add-widget-container'>
        <img className='add-widget_img' src={widget} />
        <div className='add-widget-text'>
          <h2 className='add-widget_title'>Add your widget</h2>
          <p className='add-widget_subtitle'>Customize your dashboard as you need.</p>
        </div>
        <Button text='+ Add widget' customStyle={styles.widgetBtn} />
      </div>
    </div>
  )
}
