import React from 'react'

import ProofCard from './proofcard.jsx'

export default {
  title: 'Components/ProofCard',
  component: ProofCard,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field'>
    <ProofCard {...args} />
  </div>
)

Template.args = {
  title: 'Passport',
  num: 1,
  nameCard: 'Passport',
  approved: 'approved',
  data: [
    { title: 'Issuing Country', other: 'Brazil' },
    { title: 'Passport Number', other: 'AJHKJDGKJGD' },
    { title: 'Expiry Date', other: '01/11/2025' }
  ]
}
