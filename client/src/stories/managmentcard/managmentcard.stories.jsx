import React from 'react'

import ManagmentCard from './managmentcard.jsx'

export default {
  title: 'Components/ManagmentCard',
  component: ManagmentCard,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field' style={{ width: 850 }}>
    <ManagmentCard {...args} />
  </div>
)

Template.args = {
  name: 'Your Name',
  fields: [
    { title: 'Field Type', sum: 'Short Text', type: 'text', value: null },
    { title: 'Filterable', sum: '', type: 'checkbox', value: false },
    { title: 'Manager Lock', sum: '', type: 'checkbox', value: false },
    { title: 'Tansfer to', sum: 'none', type: 'text', value: null },
    { title: '', sum: '', type: 'text', value: null },
    { title: '', sum: '', type: 'text', value: null }
  ],
  inputState: [{ value: '1' }, { value: '2' }, { value: '3' }]
}
