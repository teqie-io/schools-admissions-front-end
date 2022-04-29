import React from 'react'
import PropTypes from 'prop-types'

import Footer from '../../app/components/footer/footer'

export default function EditFooter({ data }) {
  return (
    <div>
      <Footer />
    </div>
  )
}

EditFooter.propTypes = {
  /**  @param Type An array of objects.
   * @param Object Keys for objects - title: string, persona: string, image: string, edits: array
   * @param edits Keys for objects - type: string, date: string, roleName: string, title: string
   * @param Example [
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
   **/
  data: PropTypes.array
}
