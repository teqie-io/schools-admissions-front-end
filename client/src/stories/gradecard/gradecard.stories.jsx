import React from 'react'

import GradeCard from './gradecard.jsx'

export default {
  title: 'Sub Components/GradeCard',
  component: GradeCard,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field'>
    <GradeCard {...args} />
  </div>
)

Template.args = {
  years: '2 - 2.5 yrs',
  perSection: '20',
  sections: '5'
}
