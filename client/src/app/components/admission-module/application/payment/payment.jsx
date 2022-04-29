import React, { useState } from 'react'
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs'
import images from 'react-payment-inputs/images'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Button } from '../../../../../stories'

export default function Payment({ onClick }) {
  const history = useHistory()
  const { wrapperProps, getCardImageProps, getCardNumberProps, meta, getExpiryDateProps, getCVCProps } =
    usePaymentInputs({
      cardNumberValidator
    })

  const [value, setValue] = useState('')

  const cardNumberValidator = ({ cardNumber, cardType, errorMessages }) => {
    if (cardType.displayName === 'Visa' || cardType.displayName === 'Mastercard') {
      return
    }
    return 'Card must be Visa or Mastercard'
  }

  return (
    <div className='flex flex-col mt-20 mb-16 left-5 1200px:left-0 relative payment'>
      <div
        className='bg-main-blue w-80 h-40 absolute text-white font-semibold pt-5 pl-5 -left-32 -top-14 1200px:-left-36 1200px:-top-16'
        style={{ zIndex: -1 }}
      >
        <p className='mb-2'>Application Fee</p>
        <p>₹ 1000</p>
      </div>
      <div
        className='flex flex-col border border-green-200 bg-white'
        style={{ width: '31.25rem', height: '40.625rem' }}
      >
        <div className='bg-green-200 h-8 font-semibold flex items-center pl-10'>Pay Now</div>
        <div className='flex justify-between pl-10 pr-10 mt-10'>
          <TextWrapper title='Application Name' body='Mira Ozawana' />
          <TextWrapper title='Fee Type' body='Appliction Fee' />
        </div>
        <div className='flex justify-between pl-10 pr-10 mt-3'>
          <TextWrapper title='Academic Year' body='2021-22' />
          <TextWrapper title='Grade of Entry' body='MY2' />
        </div>
        <div className='flex flex-col pl-10 pr-10 mt-20'>
          <h2 className='font-bold text-sm mb-1'>Cardholder Name</h2>
          <input
            className='border rounded pl-2'
            style={{ height: '2.5rem', borderColor: '#bdbdbd' }}
            placeholder='Type your name'
            value={value}
            onChange={(e) => setValue(e.target.value.toUpperCase())}
          />
          <h2 className='font-bold text-sm mt-5 mb-1'>
            Card Number {meta?.cardType?.displayName && `=> ${meta?.cardType?.displayName}`}
          </h2>
          <PaymentInputsWrapper>
            <svg {...getCardImageProps({ images })} />
            <input {...getCardNumberProps()} />
          </PaymentInputsWrapper>
          <div className='flex justify-between mt-5'>
            <div>
              <h2 className='font-bold text-sm mb-1'>Card Date Number</h2>
              <PaymentInputsWrapper>
                <input {...getExpiryDateProps()} />
              </PaymentInputsWrapper>
            </div>
            <div className='mb-20'>
              <h2 className='font-bold text-sm mb-1'>
                {meta?.cardType?.code.name ? meta?.cardType?.code.name : 'CVC'}
              </h2>
              <PaymentInputsWrapper>
                <input {...getCVCProps()} />
              </PaymentInputsWrapper>
            </div>
          </div>
          <Button
            text='Pay Now'
            onClick={() =>
              location.pathname.search('bloomingdale') !== -1 ? onClick(true) : history.push('/application/complete')
            }
            customStyle={{ paddingLeft: '10.938rem', fontWeight: 600 }}
          />
        </div>
      </div>
    </div>
  )
}

const TextWrapper = ({ title, body }) => {
  return (
    <div className='font-bold text-sm'>
      <p className='mb-2'>{title}</p>
      <p className='text-second-gray'>{body}</p>
    </div>
  )
}

Payment.propTypes = {
  /**  @param Type An object.
   * @param Object Keys for object - applicationName: string, academicYear: string, feeType: string, grade: string, data: object
   * @param data Keys for object - cardholder: string, cardNumber: string, cardDate: string, cvc: string
   * @param Example {
   * applicationName: 'Mira Ozawana',
   * academicYear: '2021-22',
   * feeType: 'Aplication Fee',
   * grade: 'MY2',
   * data: {
   * cardholder: '',
   * cardNumber: '',
   * cardDate:'',
   * cvc: ''
   * }
   * }
   **/
  data: PropTypes.object
}
