import React from 'react'

import Button from './button.jsx'

export default {
  title: 'Sub Components/Button',
  component: Button,
  argTypes: {
    buttonStyle: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio' }
    },
    buttonSize: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => (
  <div className='information-field'>
    <Button {...args} />
  </div>
)

Template.args = {
  text: 'main button',
  leftIcon: '',
  icon: '',
  buttonStyle: 'contained',
  buttonSize: 'medium',
  buttonDisabled: false,
  customStyle: {},
  onClick: () => {}
}
