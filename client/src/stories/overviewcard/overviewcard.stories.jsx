import React from 'react'

import OverviewCard from './overviewcard.jsx'

export default {
  title: 'Components/OverviewCard',
  component: OverviewCard,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field'>
    <OverviewCard {...args} />
  </div>
)

Template.args = {
  data: [
    { title: 'Enquiries', link: '', number: '20' },
    { title: 'Application', link: '', number: '8' },
    { title: 'E Signature', link: '', number: '4' },
    { title: 'Exam', link: '', number: '2' },
    { title: 'Approval', link: '', number: '2' },
    { title: 'Closed', link: '', number: '3' },
    { title: 'Failed', link: '', number: '2' }
  ],
  title: 'Title',
  body: 'Bloomingdale, Gallileo'
}
