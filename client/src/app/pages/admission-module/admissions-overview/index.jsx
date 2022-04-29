import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Fade from 'react-reveal'

import { overviewData, overviewTwoData } from '@entities/data'
import { OverviewCard } from '@stories'
import './admissions-overview.scss'
import ApplicationPanel from '@app/components/application-panel/application-panel'

export default function AddmissionsOverview({ burger }) {
  return (
    <div className={clsx('admissions-overview', burger ? 'pl-72' : 'pl-32')}>
      <Fade clear duration={300}>
        <OverviewCard data={overviewData} title='Playgroup' />
        <OverviewCard data={overviewTwoData} title='Nursery' />
      </Fade>
      <ApplicationPanel />
    </div>
  )
}

AddmissionsOverview.propTypes = {
  burger: PropTypes.bool
}
