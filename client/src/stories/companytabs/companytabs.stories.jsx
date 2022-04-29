import React, { useState } from 'react'

import CompanyTabs from './companytabs.jsx'

export default {
  title: 'Components/CompanyTabs',
  component: CompanyTabs,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field flex'>
    <CompanyTabs {...args} />
  </div>
)

Template.args = { types: ['Currently Active', 'Inactive', 'Upcoming Billings'], setTypeState: null, typeState: null }
