import React from 'react'

import TableContainer from './table.jsx'

export default {
  title: 'Sub Components/TableContainer',
  component: TableContainer,
  argTypes: {}
}

export const Template = (args) => (
  <div className='information-field w-80'>
    <TableContainer {...args}>
      <tr>
        <td align='left'>Loginov</td>
        <td align='right'>Preview</td>
      </tr>
    </TableContainer>
  </div>
)

Template.args = {
  dataHead: [
    { class: 'w-80', style: {}, title: 'Top Counselors', align: 'left' },
    { class: 'w-80', style: {}, title: 'Counselor', align: 'right' }
  ],
  tableClass: '',
  tableStyle: {},
  cardTableClass: 'p-10',
  cardTableStyle: {}
}
