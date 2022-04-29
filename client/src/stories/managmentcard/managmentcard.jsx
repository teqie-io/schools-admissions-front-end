import React from 'react'
import PropTypes from 'prop-types'

import { Card } from '../../app/pages/managment'

export default function ManagmentCard({ name, fields, inputState }) {
  return (
    <div>
      <Card name={name} fields={fields} inputState={inputState} />
    </div>
  )
}

ManagmentCard.propTypes = {
  name: PropTypes.string,
  fields: PropTypes.array,
  inputState: PropTypes.array
}
