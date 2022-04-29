import React from 'react'
import { NavLink } from 'react-router-dom'

import Button from '@stories/button/button'
import BloomInput from '@components/bloomingdale/input/input'

import './login.scss'
import { man } from './images'

export default function BloomLogin() {
  return (
    <div>
      <div className='bloom-login'>
        <div className='bloom-login-header'>
          <NavLink className='bloom-login-header_btn' to='/dashboard'>
            <span></span>
          </NavLink>

          <h1 className='bloom-login-header_title'>Parent Login</h1>
        </div>
        <div className='bloom-login-body'>
          <div className='bloom-login-body_greet'>
            <img src={man} alt='man with a kid' className='bloom-login-body_img' />
            <h3 className='bloom-login-body_title'>Parent Login</h3>
            <p className='bloom-login-body_subtitle'>Be a part of your child's journay</p>
          </div>
          <form className='bloom-login-body_form bloom-login-form'>
            <BloomInput title='Email adress' id='email' placeholder='Type your email address' />
            <BloomInput title='Password' type='password' id='email' />
            <NavLink to='/bloomingdale-welcome'>
              <Button text='Login' type='submit' className='bloom-login-form_submit' />
            </NavLink>
          </form>
        </div>
        <p className='bloom-login-contact'>
          Facing trouble? Contact your administrator:{' '}
          <a href='mailto: support@blooomingdale.edu.in'>support@blooomingdale.edu.in</a>
        </p>
      </div>
    </div>
  )
}
