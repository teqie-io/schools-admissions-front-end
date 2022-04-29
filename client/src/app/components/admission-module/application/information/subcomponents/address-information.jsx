import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { addressField } from '../../../../../entities/data'
import { TextFieldCard, HeaderField } from '../subcomponents'

export default function AddressInformation() {
  const [active, setActive] = useState(addressTypes && addressTypes[0])

  return (
    <div className='information-field_address'>
      <div className='w-full flex items-center justify-between mb-2 pt-5 pl-10 pr-10'>
        <p className='font-bold text-main-black text-base'>Address Information</p>
      </div>
      <HeaderField types={addressTypes} active={active} setActive={setActive} className='mb-5' />
      <div className='grid grid-cols-4 pl-10'>
        {addressField.map((item, key) => (
          <TextFieldCard title={item.title} body={item.body} key={key} />
        ))}
      </div>
    </div>
  )
}

AddressInformation.propTypes = {
  /**  @param Type An array of objects.
   * @param Object Keys for objects - title: string, body: string
   * @param Example [
  { title: 'Address 1', body: 'Galieleo Campus' },
  { title: 'Address 2', body: 'Galieleo Campus' },
  { title: 'State', body: 'Andhra Pradesh' },
  { title: 'Country', body: 'India' }
]
   **/
  data: PropTypes.array
}

const addressTypes = ['Address 1', '+ Add New Address']
