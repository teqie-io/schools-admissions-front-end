import React from 'react'

import EditFooter from './editfooter.jsx'
import { mainavatar } from '../../app/static/image'

export default {
  title: 'Components/EditFooter',
  component: EditFooter,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field'>
    <EditFooter {...args} />
  </div>
)

Template.args = {
  data: [
    {
      title: 'Draft Name',
      persona: 'Subhash A',
      image: mainavatar,
      edits: [
        { type: 'Add', date: '11:46 AM', roleName: 'Role name Security', title: 'New Role' },
        { type: 'Edit', date: '11:46 AM', roleName: 'Role name Security', title: 'New Role' },
        { type: 'Delete', date: '11:46 AM', roleName: 'Role name Security', title: 'New Role' }
      ]
    },
    {
      title: 'Draft Name',
      persona: 'Subhash A',
      image: mainavatar,
      edits: [
        { type: 'Add', date: '11:46 AM', roleName: 'Role name Security', title: 'New Role' },
        { type: 'Edit', date: '11:46 AM', roleName: 'Role name Security', title: 'New Role' },
        { type: 'Edit', date: '11:46 AM', roleName: 'Role name Security', title: 'New Role' },
        { type: 'Delete', date: '11:46 AM', roleName: 'Role name Security', title: 'New Role' }
      ]
    },
    {
      title: 'Draft Name',
      persona: 'Subhash A',
      image: mainavatar,
      edits: [{ type: 'Delete', date: '11:46 AM', roleName: 'Role name Security', title: 'New Role' }]
    }
  ]
}
