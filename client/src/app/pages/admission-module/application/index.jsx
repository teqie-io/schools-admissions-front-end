import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import Fade from 'react-reveal'

import ApplicationPanel from '@components/application-panel/application-panel.jsx'
import { dataLinks } from '@entities/routes'
import {
  ApplicationWindow,
  ApplicationHeader,
  Complete,
  Payment,
  PrincipialApproval,
  Documents,
  Exam,
  Signature,
  Information
} from '@components/admission-module'
import { mainavatar } from '@image'
import AdmissionsLinks from '@components/admission-module/admissions-links/admissions-links'
import { NavLinks } from '@components/header'
import './application.scss'

export default function Application({ burger }) {
  const { id } = useParams()

  const renderComponents = [
    {
      linkId: 'application',
      componentRender: (key) => (
        <Fade key={key} clear duration={100}>
          <Information burger={burger} />
        </Fade>
      )
    },
    {
      linkId: 'signature',
      componentRender: (key) => (
        <Fade key={key} clear duration={100}>
          <Signature />
        </Fade>
      )
    },
    {
      linkId: 'exam',
      componentRender: (key) => (
        <Fade key={key} clear duration={100}>
          <Exam />
        </Fade>
      )
    },
    {
      linkId: 'principial-approval',
      componentRender: (key) => (
        <Fade key={key} clear duration={100}>
          <PrincipialApproval />
        </Fade>
      )
    },
    {
      linkId: 'document-upload',
      componentRender: (key) => (
        <Fade key={key} clear duration={100}>
          <Documents />
        </Fade>
      )
    },
    {
      linkId: 'fee-payment',
      componentRender: (key) => (
        <Fade key={key} clear duration={100}>
          <Payment />
        </Fade>
      )
    },
    {
      linkId: 'complete',
      componentRender: (key) => (
        <Fade key={key} clear duration={100}>
          <Complete />
        </Fade>
      )
    }
  ]

  return (
    <div className={clsx('application pr-28', burger ? '1400px:pl-69' : '1400px:pl-20')}>
      <ApplicationWindow fixed={true} burger={burger} />
      <div className='ml-72'>
        <div className='flex items-center justify-between'>
          <NavLinks urls={dataLinks.applicationLinks} idLocation={id} />
          <div className='flex -space-x-2 ml-2 items-center'>
            <h3 className='relative right-10 text-main-black text-sm font-medium'>Councelors</h3>
            {[0, 1, 2].map((key) => (
              <img key={key} className='inline-block h-9 w-9 rounded-full ring-2 ring-white' src={mainavatar} alt='' />
            ))}
          </div>
        </div>
        <ApplicationHeader />
        <AdmissionsLinks />
        <div className='flex items-center justify-center'>
          {renderComponents.map((item, key) => {
            return id === item.linkId && item.componentRender(key)
          })}
        </div>
      </div>
      <ApplicationPanel />
    </div>
  )
}

Application.propTypes = {
  burger: PropTypes.bool
}
