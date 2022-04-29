import React from 'react'

import IssuesTable from './issuestable.jsx'

export default {
  title: 'Sub Components/IssuesReportsTableRow',
  component: IssuesTable,
  argTypes: {
    active: {
      options: ['solved', 'pending'],
      control: { type: 'radio' }
    }
  }
}

export const Template = (args) => {
  return (
    <div className='information-field'>
      <IssuesTable {...args} />
    </div>
  )
}

Template.args = {
  active: 'solved',
  subject: 'Not able to add users',
  id: '1372913',
  requasted: 'Likhit Grandhi',
  date: '02 August, 2021',
  assigned: 'Mophil ram'
}
