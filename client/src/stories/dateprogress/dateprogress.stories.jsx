import React from 'react'

import DateProgress from './dateprogress.jsx'

export default {
  title: 'Sub Components/DateProgress',
  component: DateProgress,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field w-32'>
    <DateProgress {...args} />
  </div>
)

Template.args = {
  date: '20th Jan - 10th Feb',
  num: 30
}
