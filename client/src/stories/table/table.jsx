import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import './table.scss'

export default function TableContainer({ dataHead, tableClass, tableStyle, children, cardTableClass, cardTableStyle }) {
  return (
    <div className={clsx('table', cardTableClass)} style={cardTableStyle}>
      <table className={clsx('table-auto', tableClass)} style={tableStyle}>
        <thead>
          <tr>
            {dataHead.map((item, key) => (
              <th className={item.class} key={key} style={item.style} align={item.align}>
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

DashboardTable.propTypes = {
  dataHead: PropTypes.array,
  tableClass: PropTypes.string,
  tableStyle: PropTypes.object,
  children: PropTypes.element,
  cardTableClass: PropTypes.string,
  cardTableStyle: PropTypes.string
}
