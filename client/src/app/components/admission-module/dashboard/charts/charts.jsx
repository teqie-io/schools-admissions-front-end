import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import Select, { components } from 'react-select'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { selectStyleDashboardCharts } from '../../../../entities/select-style'
import caretdown from '../../../../static/image/caretdown.svg'
import { chartsData, series } from '../../../../entities/charts'
import './charts.scss'

export default function Charts({ burger }) {
  const options = [
    { value: '2021', label: '(+43%) than last year' },
    { value: '2020', label: '(+13%) in 2020 year' },
    { value: '2019', label: '(+23%) in 2019 year' }
  ]

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={caretdown} />
      </components.DropdownIndicator>
    )
  }

  const [dataOption, setDataOption] = useState('2021')

  return (
    <section className={clsx('charts grid-container__item--3', burger ? 'charts_open' : 'charts_closed')}>
      <div className='pl-7'>
        <h1 className='font-semibold text-xl'>Enquiry & Conversion</h1>
        <div className='relative right-2.5'>
          <Select
            defaultValue={options[0]}
            components={{ DropdownIndicator }}
            styles={selectStyleDashboardCharts}
            options={options}
            isSearchable={false}
            onChange={(e) => setDataOption(e.value)}
          />
        </div>
      </div>
      <div id='chart' className={clsx(burger ? 'ml-3' : 'ml-9')}>
        <ReactApexChart
          options={chartsData && chartsData.options}
          series={
            (dataOption === '2021' && series.series2021) ||
            (dataOption === '2020' && series.series2020) ||
            (dataOption === '2019' && series.series2019)
          }
          chart={chartsData && chartsData.chart}
          type='line'
          height={343}
          width={'100%'}
        />
      </div>
    </section>
  )
}

Charts.propTypes = {
  /**  @param Type An object.
   * @param Object Keys for object - date: array of strings, series: object
   * @param series Keys for object - series[date]: array of objects
   * @param date Keys for objects - name: string, type: string, data: array of numbers, color: string
   * @param Example {
  date: ['2021','2020','2019'],
  series: series2021: [
    {
      name: 'Enquiries',
      type: 'column',
      data: [80, 0, 47, 0, 38, 0, 50, 0, 98, 0, 73, 0],
      color: '#008060'
    },
    {
      name: 'Conversion',
      type: 'area',
      data: [25, 30, 40, 40, 50, 45, 45, 50, 50, 55, 55, 50],
      color: '#FFC107'
    },
    {
      name: 'Enrolment',
      type: 'line',
      data: [35, 40, 50, 53, 63, 65, 55, 57, 60, 63, 58, 60],
      color: '#2E72D2'
    }
  ],
  series2020: [
    {
      name: 'Enquiries',
      type: 'column',
      data: [60, 0, 47, 0, 28, 0, 70, 0, 58, 0, 63, 0],
      color: '#008060'
    },
    {
      name: 'Conversion',
      type: 'area',
      data: [15, 20, 30, 45, 45, 60, 60, 50, 50, 55, 60, 60],
      color: '#FFC107'
    },
    {
      name: 'Enrolment',
      type: 'line',
      data: [45, 42, 53, 54, 60, 65, 77, 73, 62, 64, 68, 64],
      color: '#2E72D2'
    }
  ],
  series2019: [
    {
      name: 'Enquiries',
      type: 'column',
      data: [50, 0, 47, 0, 48, 0, 54, 0, 28, 0, 73, 0],
      color: '#008060'
    },
    {
      name: 'Conversion',
      type: 'area',
      data: [32, 43, 52, 52, 62, 57, 57, 62, 62, 67, 67, 62],
      color: '#FFC107'
    },
    {
      name: 'Enrolment',
      type: 'line',
      data: [45, 50, 60, 63, 73, 75, 65, 67, 70, 73, 70, 70],
      color: '#2E72D2'
    }
  ]
}
   **/
  data: PropTypes.object
}
