import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { markquestion } from '@image'
import { Input, Datepicker, Checkbox } from '@stories'

export default function AcademicTable({ term, burger }) {
  const styles = {
    tr: { top: 0, position: 'relative' },
    th: { display: 'flex', top: 25, position: 'relative' },
    input: { height: 43 }
  }

  return (
    <table className={clsx('table', burger ? 'table_full' : 'table_min')}>
      <thead>
        <tr style={styles.tr}>
          <th>Term Name</th>
          <th>Start Date</th>
          <th>End date</th>
          <th style={styles.th}>
            Lock Term
            <img src={markquestion} alt='markquestion' />
          </th>
        </tr>
      </thead>
      <tbody className='relative top-5'>
        {term.map((item, key) => (
          <tr key={key}>
            <td>
              <Input
                inputSize='small'
                disabled={item.lock}
                customStyle={styles.input}
                label='Name'
                name={item.name}
                value={item.name}
              />
            </td>
            <td>
              <Datepicker label='Starts on' disabled={item.lock} value={item.dateStart} />
            </td>
            <td>
              <Datepicker label='Ends on' disabled={item.lock} value={item.dateEnd} />
            </td>
            <td className='center'>
              <Checkbox value={item.lock} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

AcademicTable.propTypes = {
  term: PropTypes.array,
  burger: PropTypes.bool
}
