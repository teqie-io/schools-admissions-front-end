import React from 'react'

import OverviewCard from '../overviewcard/overviewcard.jsx'

export default {
  title: 'Components/Overview Card',
  component: OverviewCard,
  argTypes: {}
}

export const Description = () => (
  <div className='mr-9'>
    <OverviewCard
      data={[
        { title: 'Enquiries', link: '', number: '20' },
        { title: 'Application', link: '', number: '8' },
        { title: 'E Signature', link: '', number: '4' },
        { title: 'Exam', link: '', number: '2' },
        { title: 'Approval', link: '', number: '2' },
        { title: 'Closed', link: '', number: '3' },
        { title: 'Failed', link: '', number: '2' }
      ]}
      title='Playgroup'
    />
  </div>
)
