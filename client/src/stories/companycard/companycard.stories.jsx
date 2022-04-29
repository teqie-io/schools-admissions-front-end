import React from 'react'

import CompanyCard from './companycard.jsx'
import '../../app/pages/company/company.scss'

export default {
  title: 'Components/CompanyCard',
  component: CompanyCard,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field'>
    <CompanyCard {...args} />
  </div>
)

Template.args = {
  title: 'Nalanda Group of Education Pvt. Ltd.',
  body: 'Vijaywada, Andhra Pradesh',
  billing: 'Next billing on September 11, 2023',
  currently: 'Currently Active'
}
