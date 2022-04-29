import React from 'react'

import ProgramCard from './programcard.jsx'

export default {
  title: 'Sub Components/ProgramCard',
  component: ProgramCard,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field w-80 h-5'>
    <ProgramCard {...args} />
  </div>
)

Template.args = {
  sections: '2',
  nameSection: 'Playgroup',
  students: '20'
}
