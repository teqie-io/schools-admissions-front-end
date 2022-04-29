import React from 'react'
import Select, { components } from 'react-select'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Fade from 'react-reveal'

import { selectStyleDashboardHeader } from '../../../../entities/select-style'
import { notosun, dsblarrow } from '../../../../static/image'
import './dashboard-header.scss'

export default function DashboardHeader({ burger }) {
  const options = [
    { value: 'Academic0', label: '2019-20 Academic Year' },
    { value: 'Academic1', label: '2020-21 Academic Year' },
    { value: 'Academic2', label: '2021-22 Academic Year' },
    { value: 'Academic3', label: '2022-23 Academic Year' }
  ]

  return (
    <div className='dashboard-header'>
      <Fade clear duration={300}>
        <div className='flex justify-center items-center'>
          <img src={notosun} alt='morning' />
          <h2 className={clsx('base-text text-base font-normal', burger ? 'ml-4' : 'ml-4')}>
            <span className='font-black'>Good Morning,</span> Meenakshi Atluri
          </h2>
        </div>
        <div className='mr-5 relative z-10'>
          <Select
            defaultValue={options[2]}
            components={{ DropdownIndicator }}
            styles={selectStyleDashboardHeader}
            options={options}
            isSearchable={false}
          />
        </div>
      </Fade>
    </div>
  )
}

DashboardHeader.propTypes = {
  /**  @param Type An Object.
   * @param Object Keys for object - name: string, academicYears: array of objects
   * @param academicYears Keys for objects - value: string, label: string
   * @param Example {
   * name: 'Meenakshi Atluri',
   * academicYears: [
   * { value: '2019-2020', label: '2019-20 Academic Year' },
   * { value: '2020-2021', label: '2020-21 Academic Year' },
   * { value: '2021-2022', label: '2021-22 Academic Year' },
   * { value: '2022-2023', label: '2022-23 Academic Year' }
   * ]
   *}
   **/
  data: PropTypes.array
}

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={dsblarrow} />
    </components.DropdownIndicator>
  )
}
