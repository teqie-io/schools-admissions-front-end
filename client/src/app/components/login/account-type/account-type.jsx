import React, { useState, useRef, useCallback } from 'react'
import Fade from 'react-reveal/Fade'
import { NavLink, useHistory } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom'
import clsx from 'clsx'

import { Logo } from '@pages/login'
import { Checkbox, Input } from '@stories'
import { icusergroup, icuser, icsettings, google, microsoft, visible } from '../image'
import { dodles } from '@image'
import './account-type.scss'

export default function AccoutType() {
  const history = useHistory()

  const [account, setAccount] = useState(true)
  const [inputIsRendering, setInputIsRendering] = useState(false)
  const [errors, setErrors] = useState({
    gybridInput: false,
    passswordInput: false
  })
  const [visiblePass, setVisiblePass] = useState(false)

  const [inputValue, setInputValue] = useState('')

  function useDebounce(cb, ms) {
    const time = useRef(null)

    const debounce = useCallback(
      (...args) => {
        if (time.current) {
          clearTimeout(time.current)
        }

        time.current = setTimeout(() => {
          cb(...args)
        }, ms)
      },
      [cb, ms]
    )

    return debounce
  }

  const changeHandler = useCallback((e) => {
    setInputValue(e.target.value)
    renderInput(e.target.value)
  }, [])

  const renderInput = useDebounce((value) => {
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
    const validPhone = new RegExp('^([+]?[s0-9]+)?(d{3}|[(]?[0-9]+[)])?([-]?[s]?[0-9])+$')

    if (!validEmail.test(value) && !validPhone.test(value)) {
      setErrors({ gybridInput: true })
      setInputIsRendering(false)
    } else {
      setErrors({ gybridInput: false })
      if (validPhone.test(value) || (!validEmail.test(value) && !validPhone.test(value))) {
        setInputIsRendering(false)
      } else if (validEmail.test(value)) {
        setInputIsRendering(true)
      }
    }
  }, 800)

  return (
    <form>
      <div className='login account-type'>
        <NavLink className='mb-10' to='/'>
          <Logo fill='#BDB8B5' />
        </NavLink>{' '}
        <Fade clear duration={300}>
          <div className='box'>
            <h1 className='text-3xl font-black'>Welcome to Bloomingdale</h1>
            <p className='text-second-gray font-normal text-base mt-1'>
              {!account ? 'Choose an account type to proceed.' : 'Sign in to your account.'}
            </p>
            <div className='flex mt-5'>
              {!account ? (
                <div>
                  {buttonsData.map((item, key) => (
                    <button className='box-link' key={key} onClick={() => setAccount(!account)}>
                      <img src={item.img} alt={item.alt} className='pl-6' />
                      <div className='flex flex-col items-start pl-6'>
                        <p className='text-base font-medium text-main-black'>{item.account}</p>
                        <p className='text-sm font-normal text-second-gray'>{item.about}</p>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div>
                  <button className='box-signin pr-2.5'>
                    <img src={google} alt='google' className='mr-1' />
                    Signin with Google
                  </button>
                  <button className='box-signin'>
                    <img src={microsoft} alt='microsoft' />
                    Signin with Microsoft
                  </button>
                  <div className='flex items-center justify-between mt-5 mb-5'>
                    <span className='span-line' />
                    <p className='text-main-black text-sm'>OR</p>
                    <span className='span-line' />
                  </div>
                  <div className='relative'>
                    <Input
                      value={inputValue}
                      onChange={changeHandler}
                      error={errors.gybridInput}
                      label='Email or Phone Number'
                      customStyle={{ width: '27.688rem', marginBottom: '1rem' }}
                    />
                  </div>
                  <Zoom duration={300} when={inputIsRendering}>
                    <div className={clsx('relative', inputIsRendering ? '' : 'hidden')}>
                      <input
                        placeholder='Password'
                        type={visiblePass ? 'text' : 'password'}
                        name='password'
                        className={clsx('box-input box-input__pass', errors.passswordInput ? `error` : ``)}
                      />
                      <div
                        className='absolute top-4 right-5 cursor-pointer'
                        onClick={() => setVisiblePass(!visiblePass)}
                      >
                        <img src={visible} alt='visible' />
                      </div>
                    </div>
                  </Zoom>
                  <div className='flex justify-between items-center' style={{ width: '27.688rem' }}>
                    <div className='flex items-center ml-2'>
                      <Checkbox />
                      <p className='text-sm text-main-black'>Remember me</p>
                    </div>
                    <NavLink to='/login/forgot' className='font-medium text-sm' style={{ color: '#7A0C2E' }}>
                      Forgot password?
                    </NavLink>
                  </div>
                  <button className='box-submit' onClick={() => (inputIsRendering ? null : history.push('/login/otp'))}>
                    Login
                  </button>
                  <Zoom duration={300} when={inputIsRendering}>
                    <div className='flex justify-center items-center mb-8' style={{ width: '27.688rem' }}>
                      <NavLink to='/login/otp' className='font-medium text-sm' style={{ color: '#7A0C2E' }}>
                        Or login with OTP
                      </NavLink>
                    </div>
                  </Zoom>
                </div>
              )}
              <img src={dodles} alt='dodles' className='dodles' />
            </div>
          </div>
        </Fade>
      </div>
    </form>
  )
}

const buttonsData = [
  { img: icuser, alt: 'teacher', account: 'Teacher account', about: 'Educator, campus admin, IT specialist' },
  { img: icusergroup, alt: 'parent', account: 'Parent account', about: 'Family member' },
  { img: icsettings, alt: 'global', account: 'Global admin', about: 'Master admin, school admin etc.' }
]
