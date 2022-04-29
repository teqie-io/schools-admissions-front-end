import React from 'react'

import CampusesTable from './campusestable.jsx'
import { mainavatar } from '../../app/static/image'

export default {
  title: 'Sub Components/CampusesTableRow',
  component: CampusesTable,
  argTypes: {
    status: {
      options: ['active', 'disabled', 'draft'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => {
  return (
    <div className='information-field' style={{ width: 700 }}>
      <CampusesTable {...args} />
    </div>
  )
}

Template.args = {
  avatar: mainavatar,
  name: 'Galileo Campus',
  location: 'Fish pond road, Penamalauru',
  code: 'GFDGNJJN4',
  status: 'active'
}
