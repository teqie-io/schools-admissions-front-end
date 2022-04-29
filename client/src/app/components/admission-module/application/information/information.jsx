import React, { useState } from 'react'
import { Fade } from 'react-reveal'

import {
  SchoolInformation,
  AddressEditInformation,
  ApplicationInformation,
  FamilyInformation,
  ParentInformation,
  PersonalInformation,
  AddressInformation,
  Footer
} from './subcomponents'
import './information.scss'

export default function Information({ burger }) {
  const [edit, setEdit] = useState(false)

  if (edit) {
    return (
      <div className='information-field'>
        <Fade clear duration={300}>
          <p className='font-bold text-base text-main-black mb-5'>Applicant Information</p>
          <ApplicationInformation />
          <p className='font-bold text-base text-main-black mb-5'>Family Member Information</p>
          <FamilyInformation />
          <p className='font-bold text-base text-main-black mb-5'>Address Information</p>
          <AddressEditInformation />
          <p className='font-bold text-base text-main-black mb-5'>School Information</p>
          <SchoolInformation />
        </Fade>
        <Footer burger={burger} app={true} />
      </div>
    )
  }

  return (
    <div className='information-field'>
      <PersonalInformation setEdit={setEdit} />
      <ParentInformation />
      <AddressInformation />
    </div>
  )
}
