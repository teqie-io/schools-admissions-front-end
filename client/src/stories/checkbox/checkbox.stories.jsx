import React from 'react'

import Checkbox from './checkbox.jsx'

export default {
  title: 'Sub Components/Checkbox',
  component: Checkbox,
  argTypes: {
    color: {
      options: ['green', 'standart'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => (
  <div className='information-field'>
    <Checkbox {...args} />
  </div>
)

Template.args = {
  value: null,
  onChange: null,
  color: 'green'
}
