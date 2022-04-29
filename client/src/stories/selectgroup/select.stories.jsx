import React from 'react'

import SelectGroup from './selectgroup.jsx'

export default {
  title: 'Sub Components/SelectGroup',
  component: SelectGroup,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field'>
    <SelectGroup {...args} />
  </div>
)

Template.args = {}
