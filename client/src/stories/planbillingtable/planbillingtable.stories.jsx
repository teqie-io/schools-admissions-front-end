import React from 'react'

import PlanBillingTable from './planbillingtable.jsx'

export default {
  title: 'Components/PlanBillingTable',
  component: PlanBillingTable,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field'>
    <PlanBillingTable {...args} />
  </div>
)

Template.args = {
  data: [
    { invoice: 'Invoice-382464763ASD82378024', date: '02 August, 2019' },
    { invoice: 'Invoice-521DHAUD8371230123SDH', date: '12 September, 2020' }
  ]
}
