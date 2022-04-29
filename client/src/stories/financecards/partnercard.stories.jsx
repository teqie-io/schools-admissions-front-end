import React from 'react'

import './cards.scss'
import PartnerCard from '../../app/components/finance-module/scholarship-card/partner-card.jsx'

export default {
  title: 'Components/PartnerCard',
  component: PartnerCard,
  argTypes: {
    value: {
      options: ['Precentage', 'Fixed Amount'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => (
  <div className='information-field w-80 h-5'>
    <PartnerCard {...args} />
  </div>
)

Template.args = {
  title: 'HCL',
  value: 'Precentage'
}
