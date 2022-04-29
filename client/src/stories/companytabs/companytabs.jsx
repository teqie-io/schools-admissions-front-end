import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function CompanyTabs({ types, setTypeState, typeState }) {
  const [typeDeafult, setTypeDefaults] = useState(types && types[0])

  return types.map((type, key) => (
    <button
      className='pl-4 pr-4 pt-1 pb-1 font-medium text-sm rounded-lg transition-all none-after'
      style={(typeState || typeDeafult) === type ? { background: '#F6F6F7', color: '#404EED' } : { color: '#919EAB' }}
      onClick={setTypeState ? () => setTypeState(type) : () => setTypeDefaults(type)}
      key={key}
    >
      {type}
    </button>
  ))
}

CompanyTabs.propTypes = {
  types: PropTypes.array,
  setTypeState: PropTypes.func,
  typeState: PropTypes.string
}
