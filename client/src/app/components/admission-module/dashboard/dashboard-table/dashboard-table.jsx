import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { mainavatar } from '../../../../static/image'
import './dashboard-table.scss'

export default function DashboardTable({ burger }) {
  const styles = { td: { width: 194 } }
  return (
    <div className={clsx('dashboard-table', burger ? 'dashboard-table_open' : 'dashboard-table_closed')}>
      <h1 className='font-semibold text-xl flex items-center pl-7'>Top Counselors</h1>
      <table className='table-auto ml-1.5'>
        <thead>
          <tr className='pl-5 rounded-2xl'>
            <th className='text-left pl-5 rounded-l-xl'>Counselor</th>
            <th className='text-left'>Enquiries</th>
            <th className='text-left'>Coversions</th>
            <th className='text-left pr-2 rounded-r-xl'>Rank</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((item, key) => (
            <tr key={key}>
              <td className='flex pl-2 pt-9' style={styles.td}>
                <img className='w-10 h-10' src={mainavatar} />
                <div className='ml-3'>
                  <h3 className='text-sm font-bold'>Subhash Atluri</h3>
                  <p className='text-sm text-second-gray'>ldavis@bradtke.com</p>
                </div>
              </td>
              <td className='pl-7 pt-7 font-extrabold'>80</td>
              <td className='pl-8 pt-7 font-extrabold'>30</td>
              <td className='pt-6 relative right-1 text-xs font-bold'>
                <p className={`dashboard-table-top dashboard-table-top_${item}`}>Top {item}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

DashboardTable.propTypes = {
  /**  @param Type An array of objects.
   * @param Object Keys for objects - name: string, email: string, image: string, enquirie: string, coversion: string, rank: number
   * @param rank Key variations - Numbers from 1 to 5 inclusive
   * @param Example [
  { name: 'Subhash Atluri', email: 'ldavis@bradtke.com', image: 'https://localhost:8080/...', enquirie: '80, coversion: '30', rank: 1},
  { name: 'Subhash Atluri', email: 'ldavis@bradtke.com', image: 'https://localhost:8080/...', enquirie: '80, coversion: '30', rank: 2},
  { name: 'Subhash Atluri', email: 'ldavis@bradtke.com', image: 'https://localhost:8080/...', enquirie: '80, coversion: '30', rank: 3},
  { name: 'Subhash Atluri', email: 'ldavis@bradtke.com', image: 'https://localhost:8080/...', enquirie: '80, coversion: '30', rank: 4},
  { name: 'Subhash Atluri', email: 'ldavis@bradtke.com', image: 'https://localhost:8080/...', enquirie: '80, coversion: '30', rank: 5}
]
   **/
  data: PropTypes.array
}
