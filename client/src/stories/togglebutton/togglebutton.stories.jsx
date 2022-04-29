import React from 'react'

import ToggleButton from './togglebutton.jsx'

export default {
  title: 'Sub Components/ToggleButton',
  component: ToggleButton,
  argTypes: {
    inputSize: {
      options: ['medium', 'small', 'smalling'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => (
  <div className='information-field'>
    <ToggleButton {...args} />
  </div>
)

Template.args = {}
