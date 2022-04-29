import React from 'react'

import PlanBillingCard from './planbillingcard.jsx'

export default {
  title: 'Components/PlanBillingCard',
  component: PlanBillingCard,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field'>
    <PlanBillingCard {...args} />
  </div>
)

Template.args = {
  plan: 'Starter Plan',
  dateEnd: 'Aug 25, 2025',
  paySum: 25,
  countStud: 250,
  currentStud: 200,
  staff: 50
}
