import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { TextFieldCard, HeaderField } from '../subcomponents'
import { mainavatar } from '../../../../../static/image'
import { parentField, parentFieldMother } from '../../../../../entities/data'

export default function ParentInformation() {
  const [active, setActive] = useState(parentTypes && parentTypes[0])

  return (
    <div className='information-field_parent'>
      <div className='w-full flex items-center justify-between mb-2 pt-5 pl-10 pr-10'>
        <p className='font-bold text-main-black text-base'>Parent Information</p>
      </div>
      <HeaderField types={parentTypes} active={active} setActive={setActive} className='mb-5' />
      <div className='flex items-center mb-5'>
        <img src={mainavatar} className='w-12 h-12 rounded-full ml-10 mr-3' alt='mainavatar' />
        <div>
          <p className='text-sm font-bold text-main-black mb-1'>
            {active === 'Parent / Guardian 1' ? 'Thomas' : 'Viktoria'} Fulloway
          </p>
          <div className='flex'>
            <div className='chip-field'>{active === 'Parent / Guardian 1' ? 'Father' : 'Mother'}</div>
            <div className='chip-field'>{active === 'Parent / Guardian 1' ? '+91 3423 322121' : '+95 3223 376911'}</div>
            <div className='chip-field'>
              {active === 'Parent / Guardian 1' ? 'radnik.osw@gmail.com' : 'heroik.olw@gmail.com'}
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-4 pl-10'>
        {active === 'Parent / Guardian 1'
          ? parentField.map((item, key) => <TextFieldCard title={item.title} body={item.body} key={key} />)
          : parentFieldMother.map((item, key) => <TextFieldCard title={item.title} body={item.body} key={key} />)}
      </div>
    </div>
  )
}

ParentInformation.propTypes = {
  /**  @param Type An array of objects.
   * @param Object Keys for objects - title: string, body: string
   * @param Example [
  { title: 'First Name', body: 'Thomas' },
  { title: 'Middle Name ', body: 'Mathew' },
  { title: 'Last Name', body: 'Fulloway ' },
  { title: 'Preferred Name', body: 'Thoma' },
  { title: 'Relation with applicant', body: 'Father' },
  { title: 'Date of Birth', body: '02 June, 1985' },
  { title: 'Gender', body: 'Male' },
  { title: 'Email', body: 'radnik.osw@gmail.com' },
  { title: 'Mobile Number', body: '+91 3423 322121' }
]
   **/
  data: PropTypes.array
}

const parentTypes = ['Parent / Guardian 1', 'Parent / Guardian 2', '+ Add Guardian Details']
