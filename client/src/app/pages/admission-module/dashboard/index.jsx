import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Fade from 'react-reveal'

import {
  Charts,
  Stats,
  PercentCard,
  DashboardTable,
  EnqurCard,
  TotalCards,
  AddWidget,
  TopReferals,
  Tasks,
  Appointments
} from '@components/admission-module/dashboard'

import ApplicationPanel from '@components/application-panel/application-panel.jsx'
import { DashboardHeader } from '@components/admission-module/dashboard'
import './dashboard.scss'

export default function Dashboard({ burger }) {
  return (
    <React.Fragment>
      <div className={clsx('dashboard pr-20 1400px:pr-16', burger ? 'pl-8 1400px:pl-64' : 'pl-8 1400px:pl-32')}>
        <DashboardHeader />
        <Fade clear duration={300}>
          <div className={clsx('grid-container', burger ? 'pr-0' : '1400px:pr-8')}>
            <TotalCards />
            <Tasks />
            <Charts />
            <Appointments />
            <div className='flex 2xl:flex-row flex-col w-full grid-container__item--5'>
              <DashboardTable />
              <div className='grid 1260px:grid-cols-2 grid-cols-3 ml-24 1260px:ml-8 2xl:block 2xl:ml-0'>
                <PercentCard percentage={25.5} num={91} title='My Conversions' variant='conv' progressColor='#008060' />
                <PercentCard
                  percentage={40.5}
                  num={120}
                  title='Application Issued'
                  variant='apl'
                  progressColor='#2D9CDB'
                />
                <PercentCard
                  percentage={76.5}
                  num={25}
                  title='My Active Enquiries'
                  variant='enq'
                  progressColor='#F2994A'
                />
                <EnqurCard title='My Active Enquiries' enqiries='120' date='5 added this week' />
                <EnqurCard title='My Failed Enquiries' enqiries='15' date='2 added this week' />
                <EnqurCard title='Time to Conversion' enqiries='2 Days 4 Hrs 36 Min' date='Down by 2 Hours' />
              </div>
            </div>
            <TopReferals />
            <Stats />
            <AddWidget />
          </div>
        </Fade>
      </div>
      <ApplicationPanel />
    </React.Fragment>
  )
}

Dashboard.propTypes = {
  burger: PropTypes.bool
}
