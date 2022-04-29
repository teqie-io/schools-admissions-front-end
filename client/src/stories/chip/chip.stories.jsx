import React from 'react'

import Chip from './chip.jsx'

export default {
  title: 'Sub Components/Chip',
  component: Chip,
  argTypes: {
    styleChip: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => (
  <div className='information-field w-80'>
    <Chip {...args} />
  </div>
)

Template.args = {
  image: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png',
  styleChip: 'contained',
  label: 'First Name',
  deleteChip: true,
  onClick: null,
  onDeleteClick: null
}
