import React from 'react'

import FeeTermsCard from './feetermscard.jsx'

export default {
  title: 'Sub Components/FeeTermsCard',
  component: FeeTermsCard,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field'>
    <FeeTermsCard {...args} />
  </div>
)

Template.args = { num: 2, admNum: 2000, maxValue: 10000 }
