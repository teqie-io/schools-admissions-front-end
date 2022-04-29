import React from 'react'
import Fade from 'react-reveal/Fade'
import { useHistory } from 'react-router-dom'

import { Result } from '../index.jsx'
import { town } from '../image'
import { Button } from '@stories'

export default function StepOne({ setModal, burger }) {
  const history = useHistory()

  return (
    <div className='flex justify-between mt-20 w-full pr-28 pl-10 2xl:pl-24 2xl:pr-24'>
      <Fade clear duration={300}>
        <Result resultDot={resultDot} />
        <div className='flex flex-col items-center' style={{ width: '25.25rem', minHeight: '35.375rem' }}>
          <h2 className='font-bold text-2xl whitespace-pre'>Let us know the origin of your empire</h2>
          <p className='font-medium text-sm mt-4 whitespace-pre'>A few more details to help us know you better.</p>
          <img src={town} alt='town' className='mt-11' />
          <div className='mt-14'>
            <p className='text-dot-gray font-bold text-xs'>ADDRESS LINE 1 </p>
            <input
              className='border rounded transition-all pl-4 mt-3 hover:border-main-blue focus:border-main-blue'
              style={{ width: '25.25rem', height: '2.5rem' }}
            />
          </div>
          <div className='mt-5'>
            <p className='text-dot-gray font-bold text-xs'>ADDRESS LINE 2</p>
            <input
              className='border rounded transition-all pl-4 mt-3 hover:border-main-blue focus:border-main-blue'
              style={{ width: '25.25rem', height: '2.5rem' }}
            />
          </div>
          <div className='mt-5'>
            <p className='text-dot-gray font-bold text-xs'>City</p>
            <input
              className='border rounded transition-all pl-4 mt-3 hover:border-main-blue focus:border-main-blue'
              style={{ width: '25.25rem', height: '2.5rem' }}
            />
          </div>
          <div className='mt-5'>
            <p className='text-dot-gray font-bold text-xs'>State</p>
            <input
              className='border rounded transition-all pl-4 mt-3 hover:border-main-blue focus:border-main-blue'
              style={{ width: '25.25rem', height: '2.5rem' }}
            />
          </div>
          <Button
            text='Save and continue'
            className='flex items-center justify-center mt-6 mb-20 medium-after'
            customStyle={{ width: '25.25rem', height: '2.5rem' }}
            onClick={() => history.push('/institutions/payment')}
          />
        </div>
        <span className={`${burger ? 'ml-14 w-48' : 'ml-14'}`} />
        <div
          onClick={() => setModal(false)}
          className='cursor-pointer absolute'
          style={!burger ? { top: '3rem', right: '2.5rem' } : { top: '3rem', right: '12rem' }}
        >
          <Tic />
        </div>
      </Fade>
    </div>
  )
}

const resultDot = [
  { dot: 'done', text: 'Getting Started' },
  { dot: 'active', text: 'Address' },
  { dot: 'unactive', text: 'Choose a plan' },
  { dot: 'unactive', text: 'Domain Preferences' },
  { dot: 'unactive', text: 'Assign a buddy' }
]

const Tic = () => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z'
        fill='#BABEC3'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.781 6.21888C17.8508 6.28854 17.9062 6.37131 17.944 6.46243C17.9818 6.55354 18.0013 6.65122 18.0013 6.74988C18.0013 6.84853 17.9818 6.94621 17.944 7.03733C17.9062 7.12844 17.8508 7.21121 17.781 7.28088L7.28097 17.7809C7.14014 17.9217 6.94913 18.0008 6.74997 18.0008C6.55081 18.0008 6.3598 17.9217 6.21897 17.7809C6.07814 17.64 5.99902 17.449 5.99902 17.2499C5.99902 17.0507 6.07814 16.8597 6.21897 16.7189L16.719 6.21888C16.7886 6.14903 16.8714 6.09362 16.9625 6.05581C17.0536 6.018 17.1513 5.99854 17.25 5.99854C17.3486 5.99854 17.4463 6.018 17.5374 6.05581C17.6285 6.09362 17.7113 6.14903 17.781 6.21888V6.21888Z'
        fill='#8C9196'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.219 6.21888C6.14915 6.28854 6.09374 6.37131 6.05593 6.46243C6.01812 6.55354 5.99866 6.65122 5.99866 6.74988C5.99866 6.84853 6.01812 6.94621 6.05593 7.03733C6.09374 7.12844 6.14915 7.21121 6.219 7.28088L16.719 17.7809C16.8598 17.9217 17.0508 18.0008 17.25 18.0008C17.4492 18.0008 17.6402 17.9217 17.781 17.7809C17.9218 17.64 18.0009 17.449 18.0009 17.2499C18.0009 17.0507 17.9218 16.8597 17.781 16.7189L7.281 6.21888C7.21133 6.14903 7.12857 6.09362 7.03745 6.05581C6.94633 6.018 6.84865 5.99854 6.75 5.99854C6.65135 5.99854 6.55367 6.018 6.46255 6.05581C6.37143 6.09362 6.28867 6.14903 6.219 6.21888V6.21888Z'
        fill='#8C9196'
      />
    </svg>
  )
}
