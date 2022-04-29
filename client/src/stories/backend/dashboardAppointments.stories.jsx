import React from 'react'

import Appointments from '../../app/components/admission-module/dashboard/appointments/appointments.jsx'

export default {
  title: 'Components/Dashboard Appointments',
  component: Appointments,
  argTypes: {}
}

export const Description = () => (
  <div className='pr-9'>
    <Appointments />
  </div>
)
