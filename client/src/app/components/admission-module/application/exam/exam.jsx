import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom'
import { Fade } from 'react-reveal'

import { ButtonDatePicker, Results, Accept } from './sub-components'
import { StaticPicker, Schduled, Button } from '../../../../../stories'
import { icchevron } from '../principial-approval/image'

import { calendar, clock, students } from './image'
import './exam.scss'

export default function Exam() {
  const styles = { button: { paddingLeft: '3rem', paddingRight: '1.875rem', position: 'absolute', right: '0.313rem' } }

  const history = useHistory()

  const [schedule, setSchedule] = useState(false)

  return schedule ? (
    <Fade clear duration={300}>
      <div className='flex flex-col items-center mt-10 relative'>
        <img src={students} alt='' className='mb-10' />
        <Schduled />
        <Accept />
        <Results />
        <div className='relative h-16 w-full'>
          <Button
            text='Update Results'
            onClick={() => history.push('/application/principial-approval')}
            leftIcon={icchevron}
            customStyle={styles.button}
          />
        </div>
      </div>
    </Fade>
  ) : (
    <div className='flex flex-col items-center mt-5 relative'>
      <div className='w-full 2xl:w-exam'>
        <p className='font-semibold text-main-black text-base'>Schedule Test Date</p>
        <div className='exam-card' style={{ minHeight: '29.375rem' }}>
          <div
            className='flex flex-col items-center mt-6 2xl:pt-8 2xl:ml-10 ml-8 mr-10 2xl:border-b-0 border-b '
            style={{ width: '24.375rem', height: '25rem' }}
          >
            <p className='flex text-sm items-center'>
              <img src={calendar} alt='calendar' className='mr-3' />
              Select Date From Below
            </p>
            <StaticPicker />
          </div>
          <div
            className='flex flex-col items-center mt-10 2xl:mt-8  2xl:pt-6  2xl:ml-0 ml-8 mr-10'
            style={{ width: '24.375rem', height: '25rem' }}
          >
            <p className='flex text-sm items-center'>
              <img src={clock} alt='calendar' className='mr-3' />
              Select Date From Below
            </p>
            <ButtonDatePicker />
          </div>
        </div>
      </div>
      <div className='relative h-16 w-full'>
        <Button text='Schedule' onClick={() => setSchedule(true)} leftIcon={icchevron} customStyle={styles.button} />
      </div>
    </div>
  )
}

Exam.propTypes = {
  /**  @param Type An object.
   * @param Object Keys for object - date: date, times: array of strings, setTime: string, schduled: object
   * @param schduled Keys for object - name: string, image: string, testDate: string, time: string, proctors: array of objects, files: array of strings, results: string
   * @param results Key variations - Pass, Fail
   * @param Example {
   * date: new Date(),
   * times: [
  '11:00 - 11:30 PM',
  '11:30 - 12:00 PM',
  '12:00 - 12:30 PM',
  '12:30 - 13:00 PM',
  '13:00 - 13:30 PM',
  '13:30 - 14:00 PM',
  '14:00 - 14:30 PM',
  '14:30 - 15:00 PM',
  '15:00 - 15:30 PM',
  '15:30 - 16:00 PM',
  '16:00 - 16:30 PM',
  '16:30 - 17:00 PM',
  '17:00 - 17:30 PM',
  '17:30 - 18:00 PM'
],
   * setTime: '11:00 - 11:30 PM',
schduled: {
  name: '',
  image: 'https://localhost:8080/...',
  testDate: '21 January 2020',
  time: '12:00 - 12:30 PM',
  proctors: [],
  files: [],
  results: 'Fail'
}
   * }
   **/
  data: PropTypes.object
}
