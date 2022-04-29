import React from 'react'

import SelectDomainCard from './selectdomaincard.jsx'
import downtown from './downtown.png'

export default {
  title: 'Components/SelectDomain Card',
  component: SelectDomainCard,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field flex'>
    <SelectDomainCard {...args} />
  </div>
)

Template.args = {
  image: downtown,
  title: 'Use institutional domain'
}
