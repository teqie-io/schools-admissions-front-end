import React from 'react'
import PropTypes from 'prop-types'

import { circlefill, google, minigoogle } from '../image'
import { Button, Input } from '../../../../../../stories'

export default function AddressEditInformation() {
  const styles = {
    home: { fontSize: '0.875rem', marginRight: '1.25rem' },
    parent: { fontSize: '0.875rem', borderColor: '#E4E5E7', color: '#202223' },
    grandpa: { borderColor: '#E4E5E7', color: '#202223', fontSize: '0.875rem', marginRight: '1.25rem' },
    mark: { position: 'relative', right: '2.5rem' },
    bottom: { marginBottom: '1.875rem' }
  }

  return (
    <div>
      <div className='flex mb-3'>
        <Button text='Home Address' buttonSize='large' customStyle={styles.home} />
        <Button text='Grandparents Addresss' customStyle={styles.grandpa} buttonSize='large' buttonStyle='outlined' />
        <Button
          text='Add parent / Guardian'
          customStyle={styles.parent}
          buttonSize='large'
          icon={circlefill}
          buttonStyle='outlined'
        />
      </div>
      <div className='address-edit'>
        <div className='w-full bg-gray-100 flex p-3 items-center justify-between'>
          <div className='flex items-center'>
            <img src={minigoogle} alt='google' className='mr-3' />
            <div>
              <p className='font-medium text-base'>Jasmine Mathew</p>
              <p className='text-second-gray text-sm overflow-ellipsis overflow-hidden whitespace-pre w-80 1620px:w-full'>
                Mother, +91 8832412311, mathew.jasmine@gmail.com
              </p>
            </div>
          </div>
          <Button text='Mark as Primary Address' buttonStyle='outlined' buttonSize='small' customStyle={styles.mark} />
        </div>
        <div className='grid grid-cols-2 1620px:grid-cols-3 pl-10 pt-16'>
          <Input
            value='Jasmine Mathew'
            label='Nick Name'
            labelFix='-translate-x-1.5'
            customStyle={{ marginBottom: '2.5rem' }}
          />
          <Input value='Address' label='Street Address 1' labelFix='-translate-x-2.5' customStyle={styles.bottom} />
          <Input
            value='Second Address'
            label='Street Address 2'
            labelFix='-translate-x-2'
            customStyle={styles.bottom}
          />
          <Input label='State' customStyle={styles.bottom} />
          <Input label='Country' customStyle={styles.bottom} />
          <Input value='354446' label='Zip Code' customStyle={styles.bottom} />
        </div>
        <img src={google} alt='google' className='1500px:pt-10 pt-0 google-img' style={{ marginLeft: '2.625rem' }} />
      </div>
    </div>
  )
}

AddressEditInformation.propTypes = {
  /**  @param Type An object.
   * @param Object Keys for object - nickName: string, parent: string, tel: string, email: string, streetFirst: string, streetSecond: string, state: string, country: string, zipCode: string
   * @param Example {
   * nickName: 'Jasmine Mathew',
   * parent: 'Mother',
   * tel: '+91 883241231',
   * email: 'mathew.jasmine@gmail.com',
   * streetFirst: 'Address',
   * streetSecond: 'Second Address',
   * state: '',
   * country: '',
   * zipCode: '354446'
   * }
   **/
  data: PropTypes.object
}
