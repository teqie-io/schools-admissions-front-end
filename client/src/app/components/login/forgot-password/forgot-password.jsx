import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import clsx from 'clsx'

import { Logo } from '@pages/login'
import { looking, inbox } from '../image'
import { InputVerification, Input } from '@stories'
import '../account-type/account-type.scss'

export default function ForgotPassword() {
  const [account, setAccount] = useState(false)
  const history = useHistory()

  let error = false

  return (
    <div className='login account-type' style={{ background: !account ? '#FDD998' : '#E0ECE4' }}>
      <NavLink className='mb-10' to='/'>
        <Logo fill={!account ? '#FFB226' : '#A5BBAC'} />
      </NavLink>
      <Fade clear duration={300}>
        <div className='box'>
          <h1 className='text-3xl font-black'>{!account ? 'Forgot Password' : 'Please check your Email!'}</h1>
          <p className='text-second-gray font-normal text-base mt-1' style={{ width: '28rem' }}>
            {!account
              ? `Please enter the email address associated with your account, and we'll email you a link to reset your password.`
              : `We've emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email.`}
          </p>
          <div className='flex mt-5'>
            {!account ? (
              <div>
                <div className='relative'>
                  <Input label='Email or Phone Number' customStyle={{ width: '27.688rem', marginBottom: '1rem' }} />
                </div>
                <button
                  className='box-submit'
                  onClick={() => {
                    setAccount(!account)
                  }}
                  style={{ width: '25.75rem', marginTop: '1.5rem' }}
                  type='submit'
                >
                  Reset Password
                </button>
              </div>
            ) : (
              <div style={{ width: '25.75rem' }}>
                <InputVerification className='mt-12' />
                <button
                  className='box-submit'
                  onClick={() => {
                    history.push('/login/otp')
                  }}
                  style={{ width: '25.75rem', marginTop: '1.5rem' }}
                  type='submit'
                >
                  Reset Password
                </button>
              </div>
            )}
            <img src={!account ? looking : inbox} alt='looking' className='dodles' />
          </div>
        </div>
      </Fade>
    </div>
  )
}
