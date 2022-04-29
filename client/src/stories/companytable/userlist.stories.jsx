import React from 'react'

import UserList from './userlist.jsx'
import { mainavatar } from '../../app/static/image'

export default {
  title: 'Sub Components/UserListRow',
  component: UserList,
  argTypes: {
    status: {
      options: ['Active', 'Banned'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => {
  return (
    <div className='information-field' style={{ width: 700 }}>
      <UserList {...args} />
    </div>
  )
}

Template.args = {
  image: mainavatar,
  name: 'Ingo Schimpff',
  grade: 'PY1',
  parents: 'Jack Schimpff',
  accessed: 'Yes',
  status: 'Active'
}
