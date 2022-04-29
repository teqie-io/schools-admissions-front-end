import React, { useState } from 'react'

import DatePicker from './datepicker.jsx'

export default {
  title: 'Sub Components/DatePicker',
  component: DatePicker,
  argTypes: {}
}

export const Template = (args) => {
  const [value, setValue] = useState(new Date())

  return (
    <div className='information-field'>
      <DatePicker {...args} psetValue={setValue} pValue={value} />
    </div>
  )
}

Template.args = { label: 'Picker' }
