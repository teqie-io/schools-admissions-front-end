import React from 'react'

import './cards.scss'
import PrincipialCard from '../../app/components/finance-module/scholarship-card/principial-card.jsx'

export default {
  title: 'Components/PrincipialCard',
  component: PrincipialCard,
  argTypes: {
    value: {
      options: ['Precentage', 'Fixed Amount'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => (
  <div className='information-field w-80 h-5'>
    <PrincipialCard {...args} />
  </div>
)

Template.args = {
  value: 'Precentage',
  clickable: true,
  approvalOptions: [
    { value: 'xyz', label: 'xyz aproval process' },
    { value: 'xyzt', label: 'test process' }
  ],
  aboveOptions: [
    { value: 'Auto reject', label: 'Auto reject' },
    { value: 'Auto reject2', label: 'Auto reject 2' }
  ]
}
