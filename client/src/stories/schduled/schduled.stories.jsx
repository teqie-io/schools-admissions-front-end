import React from 'react'

import Schduled from './schduled.jsx'

export default {
  title: 'Components/Schduled',
  component: Schduled,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field'>
    <Schduled {...args} />
  </div>
)

Template.args = {
  data: { schduled: '', testDate: '21 January 2020', time: '12:00 - 12:30 PM' }
}
