import React from 'react'

import DomainCard from './insigniacard.jsx'

export default {
  title: 'Components/Insignia Card',
  component: DomainCard,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field'>
    <DomainCard {...args} />
  </div>
)

Template.args = {
  title: 'School Logo',
  body: 'School logo will appear on the login and dashboard pages. The logo width should be less than 200 pixels.',
  id: 'card'
}
