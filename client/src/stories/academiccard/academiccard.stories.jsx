import React from 'react'

import AcademicCard from './academiccard.jsx'

export default {
  title: 'Sub Components/AcademicCard',
  component: AcademicCard,
  argTypes: {
    colorOption: {
      options: ['green', 'blue', 'yellow'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => (
  <div className='information-field'>
    <AcademicCard {...args} />
  </div>
)

Template.args = {
  termName: 'Term 1',
  dateStart: 'Jul 13, 2021',
  dateEnd: 'Sep 13, 2021',
  colorOption: 'green'
}
