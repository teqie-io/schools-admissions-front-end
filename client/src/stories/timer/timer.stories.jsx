import React from 'react'

import Timer from './timer.jsx'

export default {
  title: 'Sub Components/Timer',
  component: Timer,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field w-80'>
    <Timer {...args} />
  </div>
)

Template.args = {
  sec: 0,
  allTime: '15:00'
}
