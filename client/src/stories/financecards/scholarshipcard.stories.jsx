import React from 'react'

import './cards.scss'
import ScholarshipCard from '../../app/components/finance-module/scholarship-card/scholarship-card.jsx'

export default {
  title: 'Components/ScholarshipCard',
  component: ScholarshipCard,
  argTypes: {
    value: {
      options: ['Precentage', 'Fixed Amount'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => (
  <div className='information-field w-80 h-5'>
    <ScholarshipCard {...args} />
  </div>
)

Template.args = {
  title: 'Parent Dicsount',
  value: 'Precentage',
  clickable: true
}
