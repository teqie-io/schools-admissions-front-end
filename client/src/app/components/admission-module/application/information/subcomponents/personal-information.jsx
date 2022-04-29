import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { TextFieldCard, HeaderField } from '../subcomponents'
import { informationField } from '../../../../../entities/data'
import { Button } from '../../../../../../stories'

export default function PersonalInformation({ setEdit }) {
  const [active, setActive] = useState(informationTypes && informationTypes[0])

  return (
    <div className='information-field_personal'>
      <div className='w-full flex items-center justify-between mb-2 pt-5 pl-10 pr-10'>
        <p className='font-bold text-main-black text-base'>Student Information</p>
        <Button onClick={() => setEdit(true)} text='Edit Application' buttonSize='small' buttonStyle='outlined' />
      </div>
      <HeaderField types={informationTypes} active={active} setActive={setActive} className='mb-10' />
      {active === 'Personal Details' ? (
        <div className='grid grid-cols-4 pl-24'>
          {informationField.map((item, key) => (
            <TextFieldCard title={item.title} body={item.body} key={key} />
          ))}
        </div>
      ) : null}
    </div>
  )
}

PersonalInformation.propTypes = {
  /**  @param Type An array of objects.
   * @param Object Keys for objects - title: string, body: string
   * @param Example [
  { title: 'First Name', body: 'Thomas' },
  { title: 'Middle Name ', body: 'Mathew' },
  { title: 'Last Name', body: 'Fulloway ' },
  { title: 'Preferred Name', body: 'Thoma' },
  { title: 'Other Name', body: 'Thoma' },
  { title: 'Date of Birth', body: '02 June, 2015' },
  { title: 'Gender', body: 'Male' },
  { title: 'Grade of Entry', body: '4th Grade' },
  { title: 'Enrollement Year', body: '2019-2020' },
  { title: 'Campus', body: 'Galieleo Campus' },
  { title: 'Email', body: 'thoma@bis.edu.in' },
  { title: 'Mobile Number', body: '7013688211' },
  { title: 'Language', body: 'English' },
  { title: 'Nationality', body: 'Indian' },
  { title: 'Naitonal ID', body: '4567 8565 1232' }
]
   **/
  data: PropTypes.array,
  setEdit: PropTypes.func
}

const informationTypes = ['Personal Details', 'School History']
