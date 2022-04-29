import React from 'react'

import TemplateCard from './templatecard.jsx'

export default {
  title: 'Components/TemplateCard',
  component: TemplateCard,
  argTypes: {
    type: {
      options: ['Active', 'Draft'],
      control: { type: 'radio' }
    },
    active: {
      options: ['Active', 'Draft'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => (
  <div className='information-field'>
    <TemplateCard {...args} />
  </div>
)

Template.args = {
  title: 'New Enquiry',
  body: 'This template can be used when a new enquiry is recived',
  type: 'Active',
  active: 'Active',
  social: ['message', 'phone', 'messenger']
}
