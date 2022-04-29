import React from 'react'

import CompanyTableRow from './companytable.jsx'
import { mainavatar } from '../../app/static/image'

export default {
  title: 'Sub Components/CompanyTableRow',
  component: CompanyTableRow,
  argTypes: {
    active: {
      options: ['active', 'inactive'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => {
  return (
    <div className='information-field' style={{ width: 700 }}>
      <CompanyTableRow {...args} />
    </div>
  )
}

Template.args = {
  active: 'active',
  campus: 'Bloomingdale - Ruby Campus',
  location: 'Karnataka',
  tip: 'Electronic City, Karnataka, Banglore',
  image: mainavatar,
  date: '02 August, 2021'
}
