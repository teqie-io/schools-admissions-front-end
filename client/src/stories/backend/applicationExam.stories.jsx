import React from 'react'

import '../../app/components/admission-module/application/information/information.scss'
import Exam from '../../app/components/admission-module/application/exam/exam.jsx'

export default {
  title: 'Components/Application Exam',
  component: Exam,
  argTypes: {}
}

export const Description = () => (
  <div className='information-field'>
    <div style={{ width: 450 }}>
      <Exam />
    </div>
  </div>
)
