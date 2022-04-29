import React from 'react'

import NotificationAccordion from './notificationardn.jsx'

export default {
  title: 'Sub Components/NotificationAccordion',
  component: NotificationAccordion,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field'>
    <NotificationAccordion {...args} />
  </div>
)

Template.args = {
  data: [
    {
      title: 'When new eniqiry is created',
      person: [
        { label: 'Karthik', role: false },
        { label: 'Admissions Manager', role: true },
        { label: 'Kogi', role: false }
      ]
    },
    {
      title: 'When Enquiry is assigned to you',
      person: [
        { label: 'Karthik', role: false },
        { label: 'Admissions Manager', role: true },
        { label: 'Kogi', role: false }
      ]
    },
    {
      title: 'When an enquiry schduled a visit',
      person: ['Karthik'],
      person: [
        { label: 'Person check', role: false },
        { label: 'Admissions Manager', role: true },
        { label: 'Role check', role: true }
      ]
    }
  ]
}
