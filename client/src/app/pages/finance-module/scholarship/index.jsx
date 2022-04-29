import React, { useState } from 'react'
import clsx from 'clsx'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'

import { ScholarshipCard, SibillingCard, PartnerCard, PrincipialCard } from '@components/finance-module'
import Footer from '@components/footer/footer.jsx'
import { dataLinks } from '@entities/routes'
import { ToggleButton } from '@stories'
import { NavLinks } from '@components/header'
import './scholarship.scss'

export default function Scholarship({ burger }) {
  const [state, setState] = useState({
    parent: true,
    sibbilng: false,
    principial: false
  })

  return (
    <div className={clsx('scholarship', burger ? 'ml-80' : 'ml-40')}>
      <Fade clear duration={300}>
        <NavLinks urls={dataLinks.scholashipsLinks} />
        <h1 className='namepage'>Scholarship</h1>
        <React.Fragment>
          <div className='flex text-xl items-center ml-3 mb-5'>
            Parent Refferal Discount
            <ToggleButton
              inputSize='small'
              value={state.parent}
              onChange={() => setState({ ...state, parent: !state.parent })}
              customStyle={{ marginLeft: '0.938rem' }}
            />
          </div>
          <div className={clsx('scholarship-row', state.parent ? 'card-row_active' : 'card-row')}>
            <ScholarshipCard title='Parent Discount' value='Precentage' clickable={state.parent} />
            <ScholarshipCard title='Admission Discount' clickable={state.parent} />
            <ScholarshipCard clickable={state.parent} />
          </div>
          <div className='flex text-xl items-center ml-3 mb-5'>
            Sibbiling Discount
            <ToggleButton
              inputSize='small'
              value={state.sibbilng}
              onChange={() => setState({ ...state, sibbilng: !state.sibbilng })}
              customStyle={{ marginLeft: '0.938rem' }}
            />
          </div>
          <div className={clsx('scholarship-row', state.sibbilng ? 'card-row_active' : 'card-row')}>
            <SibillingCard title='1st Sibbling' value='5' />
            <SibillingCard title='2st Sibbling' value='10' />
            <SibillingCard />
          </div>

          <div className='flex text-xl items-center ml-3 mb-5'>Partner Discount</div>
          <div className='scholarship-row'>
            <PartnerCard title='HCL' value='Precentage' />
            <PartnerCard />
          </div>
          <div className='flex text-xl items-center ml-3 mb-5'>
            Principal Discount
            <ToggleButton
              inputSize='small'
              value={state.principial}
              onChange={() => setState({ ...state, principial: !state.principial })}
              customStyle={{ marginLeft: '0.938rem' }}
            />
          </div>
          <div className={clsx('scholarship-row', state.principial ? 'card-row_active' : 'card-row')}>
            <PrincipialCard value='Precentage' />
            <PrincipialCard type='button' />
          </div>
        </React.Fragment>
      </Fade>
      <Footer burger={burger} />
    </div>
  )
}

Scholarship.propTypes = {
  burger: PropTypes.bool
}
