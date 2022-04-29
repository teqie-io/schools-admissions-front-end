import React, { useState } from 'react'

import StaticPicker from './staticpicker.jsx'

export default {
  title: 'Sub Components/StaticPicker',
  component: StaticPicker,
  argTypes: {}
}

export const Template = (args) => {
  const [value, setValue] = useState(new Date())

  return (
    <div className='information-field'>
      <StaticPicker {...args} psetValue={setValue} pValue={value} />
    </div>
  )
}

Template.args = {}
