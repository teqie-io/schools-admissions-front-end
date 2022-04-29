import React from 'react'

import UsersTable from './userstable.jsx'
import { mainavatar } from '../../app/static/image'

export default {
  title: 'Sub Components/UsersTableRow',
  component: UsersTable,
  argTypes: {
    active: {
      options: ['active', 'inactive'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => {
  return (
    <div className='information-field'>
      <UsersTable {...args} />
    </div>
  )
}

Template.args = {
  active: 'inactive',
  name: 'Subhash Atluri',
  role: 'Admin',
  date: '12 September, 2021',
  email: 'sailikhit@bloomingdale.ed',
  image: mainavatar
}
