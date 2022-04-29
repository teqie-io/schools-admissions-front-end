import React from 'react'

import Input from './input.jsx'

export default {
  title: 'Sub Components/Input',
  component: Input,
  argTypes: {
    inputSize: {
      options: ['medium', 'small'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => (
  <div className='information-field'>
    <Input {...args} />
  </div>
)

Template.args = {
  type: 'text',
  label: 'Text Input',
  onChange: {},
  name: 'thatinput',
  placeholder: '',
  error: false,
  customStyle: {},
  inputSize: 'medium'
}
