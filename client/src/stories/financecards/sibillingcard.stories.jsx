import React from 'react'

import './cards.scss'
import SibillingCard from '../../app/components/finance-module/scholarship-card/sibilling-card.jsx'

export default {
  title: 'Components/SibillingCard',
  component: SibillingCard,
  argTypes: {
    value: {
      options: ['Precentage', 'Fixed Amount'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => (
  <div className='information-field w-80 h-5'>
    <SibillingCard {...args} />
  </div>
)

Template.args = {
  title: 'Parent Dicsount',
  value: 'Precentage'
}
