import React from 'react'
import Fade from 'react-reveal/Fade'
import { NavLink, useHistory } from 'react-router-dom'

import { Logo } from '@pages/login'
import { inbox } from '../image'
import { InputVerification } from '@stories'
import '../account-type/account-type.scss'

export default function OTPLogin() {
  const history = useHistory()

  return (
    <div className='login account-type' style={{ background: '#F9F3F3' }}>
      <NavLink className='mb-10' to='/'>
        <Logo fill={'#CDBABA'} />
      </NavLink>{' '}
      <Fade clear duration={300}>
        <div className='box'>
          <h1 className='text-3xl font-black'>Please check your phone!</h1>
          <p className='text-second-gray font-normal text-base mt-1' style={{ width: '28rem' }}>
            We've emailed a 6-digit confirmation code to xxxxxxx7557, please enter the code in below box to verify your
            phone.
          </p>
          <div className='flex mt-5'>
            <div style={{ width: '25.75rem' }}>
              <InputVerification className='mt-12' />
              <button
                className='box-submit'
                onClick={() => {
                  history.push('/worlds/giiki')
                }}
                style={{ width: '25.75rem', marginTop: '1.5rem' }}
                type='submit'
              >
                Verify
              </button>
              <div
                className='text-sm text-main-black font-normal flex justify-center'
                style={{ width: '25.75rem', marginTop: '1rem' }}
              >
                Don't have a code?
                <NavLink className='mb-10 ml-3' style={{ color: '#007B55' }} to='/login/otp'>
                  Resend Code
                </NavLink>
              </div>
            </div>
            <img src={inbox} alt='looking' className='dodles' />
          </div>
        </div>
      </Fade>
    </div>
  )
}
