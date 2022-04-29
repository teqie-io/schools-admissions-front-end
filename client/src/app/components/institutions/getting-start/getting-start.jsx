import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'

import { monster } from '../image'
import { dataLinks } from '@entities/routes'
import { NavLinks } from '@components/header'
import { Button } from '@stories'
import GettingStartModal from './getting-start-modal.jsx'

export default function GettingStart({ burger }) {
  const [modal, setModal] = useState(false)

  return (
    <div className={`relative ${modal ? 'overflow-visible' : 'overflow-hidden'}`}>
      <Fade clear duration={300}>
        <NavLinks urls={dataLinks.institutionsLinks} />
        <h1 className='namepage'>Institutions</h1>
        <div className='institutions-box'>
          <img src={monster} alt='monster' />
          <p className='font-medium text-sm mt-5 mb-6' style={{ color: '#4F5660' }}>
            Looks like no one purchased your software yet.
          </p>
          <Button
            text='Create Instituiton'
            onClick={() => setModal(!modal)}
            className='flex items-center justify-center w-40 h-11 none-after'
          />
        </div>
        <GettingStartModal modal={modal} setModal={setModal} burger={burger} />
      </Fade>
    </div>
  )
}
