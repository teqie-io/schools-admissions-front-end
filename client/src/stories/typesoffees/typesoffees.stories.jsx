import React from 'react'

import TypesOfFees from './typesoffees.jsx'

export default {
  title: 'Sub Components/TypesOfFees',
  component: TypesOfFees,
  argTypes: {
    type: {
      options: ['checkbox', 'text'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => (
  <div className='information-field'>
    <TypesOfFees {...args} />
  </div>
)

Template.args = {
  type: 'text',
  title: 'Storybook',
  sum: '150'
}
