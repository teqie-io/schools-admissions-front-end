import React from 'react'

import HeaderTabs from './tabs.jsx'

export default {
  title: 'Components/HeaderTabs',
  component: HeaderTabs,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field flex'>
    <HeaderTabs {...args} />
  </div>
)

Template.args = {
  types: ['IB Middle Years', 'IB Enchanced Pimary Years', 'IB Diploma Programme'],
  setTypeState: null,
  typeState: null,
  customStyle: null,
  customClass: '',
  activeClass: 'border-main-blue',
  icon: null,
  iconClass: null,
  iconStyle: null
}
