import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Fade } from 'react-reveal'

import { Button } from '../../../../../stories'
import { iccheck, approved, icchevron, waiting } from './image'

export default function PrincipialApproval() {
  const history = useHistory()

  const [preview, setPreview] = useState(false)

  if (preview) {
    return (
      <div className='flex flex-col items-center mb-16'>
        <Fade clear duration={300}>
          <img src={approved} alt='approved' />
          <img src={iccheck} alt='approved check' />
          <p className='text-main-black text-base font-semibold mt-4 mb-4'>Principal Approval Complete</p>
          <Button
            text='Next Stage'
            onClick={() => history.push('/application/document-upload')}
            leftIcon={icchevron}
            customStyle={{ paddingLeft: '3rem', paddingRight: '1.875rem' }}
          />
        </Fade>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center mb-16'>
      <img src={waiting} alt='approved' />
      <p className='text-main-black text-base font-semibold mt-4 mb-4'>Waiting for Principal Approval</p>
      <Button
        text='Schdule a meeting'
        onClick={() => setPreview(true)}
        customStyle={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
      />
    </div>
  )
}
