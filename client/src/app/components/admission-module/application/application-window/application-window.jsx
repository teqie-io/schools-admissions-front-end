import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Select, { components } from 'react-select'

import { enquririesWindowData } from '../../../../entities/data'
import { sort } from '../../../../static/image'
import { selectStyleWindow } from '../../../../entities/select-style'
import EnquiriesCard from './enquiries-card.jsx'
import './application-window.scss'

export default function ApplicationWindow({ burger, fixed = true }) {
  const styles = { sort: { width: '1.125rem', height: '1.125rem' } }

  const options = [
    { value: 'All Enquiries', label: 'All Enquiries' },
    { value: 'Enquiries 1', label: 'Enquiries 1' },
    { value: 'Enquiries 2', label: 'Enquiries 2' }
  ]

  return (
    <div
      className={clsx(
        'enquiries-window ',
        fixed ? 'fixed' : 'relative',
        burger ? 'enquiries-window_open' : 'enquiries-window_closed'
      )}
    >
      <div className='enquiries-window-header'>
        <div className='flex items-center pt-1 pl-1'>
          <Select
            defaultValue={options[0]}
            options={options}
            components={{ DropdownIndicator }}
            className='mr-10'
            styles={selectStyleWindow}
          />
          <button className='add-enquiries-btn'>+</button>
          <button className='w-6 h-6'>
            <img style={styles.sort} src={sort} alt='' />
          </button>
        </div>
        <div className='flex items-center pt-1 pl-2'>
          <SearchIcon />
          <input placeholder='Search Enquiries' className='w-44 ml-3 mt-1' />
        </div>
      </div>
      <div className='enquiries-window-body'>
        <p className='enquiries-window-body_title'>Recent Enquiries</p>
        {enquririesWindowData.map((item, key) => (
          <EnquiriesCard name={item.name} py={item.py} pattern={item.pattern} date={item.date} key={key} />
        ))}
      </div>
    </div>
  )
}

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg xmlns='http://www.w3.org/2000/svg' width='5' height='4' viewBox='0 0 5 4' fill='none'>
        <path
          d='M0.307026 1.80667L2.03369 3.53334C2.29369 3.79334 2.71369 3.79334 2.97369 3.53334L4.70036 1.80667C5.12036 1.38667 4.82036 0.666672 4.22703 0.666672H0.773693C0.18036 0.666672 -0.112974 1.38667 0.307026 1.80667Z'
          fill='#212B36'
        />
      </svg>
    </components.DropdownIndicator>
  )
}

const SearchIcon = () => {
  return (
    <div>
      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14.425 13.25L17.2583 16.075C17.4161 16.2315 17.5048 16.4445 17.5048 16.6667C17.5048 16.8889 17.4161 17.1019 17.2583 17.2583C17.1019 17.4161 16.8889 17.5048 16.6667 17.5048C16.4445 17.5048 16.2315 17.4161 16.075 17.2583L13.25 14.425C12.0854 15.3392 10.6472 15.8352 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667C15.8352 10.6472 15.3392 12.0854 14.425 13.25ZM9.16667 4.16667C6.40524 4.16667 4.16667 6.40524 4.16667 9.16667C4.16667 11.9281 6.40524 14.1667 9.16667 14.1667C11.9281 14.1667 14.1667 11.9281 14.1667 9.16667C14.1667 6.40524 11.9281 4.16667 9.16667 4.16667Z'
          fill='#919EAB'
          fillOpacity='0.8'
        />
      </svg>
    </div>
  )
}

ApplicationWindow.propTypes = {
  /** @param storybook Position for storybook */
  fixed: PropTypes.bool,
  /**  @param Type An Object of arrays.
   * @param Object Keys for object - enquiriesOptions: array of objects, enquiries: array of objects
   * @param enquiriesOptions Keys for object - value: string, label:string
   * @param enquiries Keys for object - name: string, py: string, pattern: string, date: string
   * @param pattern Key variations - New, Application, Failed
   * @param Example {
   * enquiriesOptions: [
    { value: 'All Enquiries', label: 'All Enquiries' },
    { value: 'Enquiries 1', label: 'Enquiries 1' },
    { value: 'Enquiries 2', label: 'Enquiries 2' }
  ]
   * enquiries: [
  { name: 'Richard Mathew', py: 'PY4', pattern: 'New', date: '2021-22' },
  { name: 'Uma Naga Shenkar...', py: 'PY4', pattern: 'Failed', date: '2021-22' },
  { name: 'Subhash Atluri', py: 'PY2', pattern: 'New', date: '2021-22' },
  { name: 'Meena Atluri', py: 'PY4', pattern: 'New', date: '2021-22' },
  { name: 'George Bush', py: 'PY3', pattern: 'Failed', date: '2021-22' },
  { name: 'Richard Mathew', py: 'PY3', pattern: 'Application', date: '2021-22' }
]
}
   **/
  data: PropTypes.array
}
