import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import { useHistory } from 'react-router-dom'

import { Result } from '../index.jsx'
import { cityscapes, downtown, upload, drive, whatsapp, meet, check, google } from '../image'
import { Button, ToggleButton } from '@stories'

export default function Domain({ setModal, burger }) {
  const history = useHistory()

  const types = ['domain', 'logo', 'integration']
  const [type, setType] = useState(types && types[0])

  const [checkToggle, setCheckToggle] = useState(false)

  return (
    <div className='flex justify-between mt-20 w-full pr-28 pl-10 2xl:pl-20 2xl:pr-24'>
      <Fade clear duration={300}>
        <Result resultDot={resultDot} />
        <div className='flex flex-col items-center' style={{ width: '25.25rem', minHeight: '35.375rem' }}>
          {type === 'domain' && (
            <React.Fragment>
              <h2 className='font-bold text-2xl whitespace-pre'>Almost done! Choose a domain preference</h2>
              <p className='font-medium text-sm mt-4 mb-16 whitespace-pre'>Pick a domain to host your gikii console</p>
              <div className='flex'>
                {[cityscapes, downtown].map((item, key) => (
                  <div
                    className={`${
                      key === 0 ? 'mr-10' : ''
                    } border-light-green cursor-pointer bg-ligther-gray rounded-lg flex flex-col items-center border`}
                    style={{ width: '17.563rem', height: '21.75rem' }}
                    onClick={() => setType('logo')}
                    key={key}
                  >
                    <p className='text-sm font-medium mt-8 mb-6'>Use institutional domain</p>
                    <img src={item} className='w-36 h-28' alt='cityscapes' />
                  </div>
                ))}
              </div>
            </React.Fragment>
          )}
          {type === 'logo' && (
            <React.Fragment>
              <h2 className='font-bold text-2xl whitespace-pre'>Insignia & Logo</h2>
              <DomainCard
                title='School Logo'
                body='School logo will appear on the login and dashboard pages. The logo width should be less than 200 pixels.'
                id='card'
              />
              <DomainCard
                title='Top Navigation'
                body='School logo will appear on top navigation bar. Square format is 32 x 32px, and for the wide format the height is always 32 pixels.'
                id='card2'
              />
              <Button
                text='Next'
                className='flex items-center justify-center mt-20 mb-20 medium-after'
                customStyle={{ width: '25.25rem', height: '2.5rem', background: '#3A8B93' }}
                onClick={() => setType('integration')}
              />
            </React.Fragment>
          )}
          {type === 'integration' && (
            <React.Fragment>
              <div className='flex items-center justify-between' style={{ width: '38.063rem' }}>
                <h2 className='font-bold text-2xl whitespace-pre'>Integrations</h2>
                <div className='flex items-center'>
                  <p className='text-main-black text-base mr-6'>Enable All</p>
                  <ToggleButton
                    value={checkToggle}
                    onChange={() => setCheckToggle(!checkToggle)}
                    inputSize='medium'
                    bg='#A2BCB0'
                  />
                </div>
              </div>
              <div
                className='mt-6 rounded flex items-center pl-6 mb-6'
                style={{
                  width: '38.063rem',
                  height: '3.25rem',
                  boxShadow: '0px 0px 2px rgba(145, 158, 171, 0.24), 0px 12px 24px rgba(145, 158, 171, 0.24)'
                }}
              >
                <Search />
                <input className='ml-2 w-80' placeholder='Search Integrations' />
              </div>
              <div
                className='mt-4 flex items-center justify-between pl-6 pr-4'
                style={{
                  width: '38.063rem',
                  height: '5rem',
                  boxShadow: '0px 0px 2px rgba(145, 158, 171, 0.24), 0px 12px 24px rgba(145, 158, 171, 0.24)'
                }}
              >
                <div className='flex items-center'>
                  <img src={check} alt='check' className='mr-5' />
                  <img src={meet} alt='meet' className='mr-1' />
                  <div>
                    <p className='text-sm font-medium'>Google Meet</p>
                    <p className='text-sm font-medium text-second-gray'>Meetings & Chat</p>
                  </div>
                </div>
                <Arrow />
              </div>
              <div
                className='mt-4 flex items-center justify-between pl-6 pr-4'
                style={{
                  width: '38.063rem',
                  height: '5rem',
                  boxShadow: '0px 0px 2px rgba(145, 158, 171, 0.24), 0px 12px 24px rgba(145, 158, 171, 0.24)'
                }}
              >
                <div className='flex items-center'>
                  <img src={check} alt='check' className='mr-5' />
                  <img src={whatsapp} alt='meet' className='mr-1' />
                  <div>
                    <p className='text-sm font-medium'>Whatsapp</p>
                    <p className='text-sm font-medium text-second-gray'>Chat & Communication</p>
                  </div>
                </div>
                <Arrow />
              </div>
              <div
                className='mt-4 flex items-center justify-between pl-6 pr-4'
                style={{
                  width: '38.063rem',
                  height: '5rem',
                  boxShadow: '0px 0px 2px rgba(145, 158, 171, 0.24), 0px 12px 24px rgba(145, 158, 171, 0.24)'
                }}
              >
                <div className='flex items-center'>
                  <img src={check} alt='check' className='mr-5' />
                  <img src={google} alt='meet' className='mr-1' />
                  <div>
                    <p className='text-sm font-medium'>Google Drive</p>
                    <p className='text-sm font-medium text-second-gray'>Utilities & Storage</p>
                  </div>
                </div>
                <Arrow />
              </div>
              <div
                className='mt-4 flex items-center justify-between pl-6 pr-4'
                style={{
                  width: '38.063rem',
                  height: '5rem',
                  boxShadow: '0px 0px 2px rgba(145, 158, 171, 0.24), 0px 12px 24px rgba(145, 158, 171, 0.24)'
                }}
              >
                <div className='flex items-center'>
                  <img src={check} alt='check' className='mr-5' />
                  <img src={drive} alt='meet' className='mr-1' />
                  <div>
                    <p className='text-sm font-medium'>One Drive</p>
                    <p className='text-sm font-medium text-second-gray'>Utilities & Storage</p>
                  </div>
                </div>
                <Arrow />
              </div>
              <Button
                text='Next'
                className='flex items-center justify-center mt-20 mb-20 medium-after'
                customStyle={{ width: '25.25rem', height: '2.5rem', background: '#3A8B93' }}
                onClick={() => history.push('/institutions/buddy')}
              />
            </React.Fragment>
          )}
        </div>
        <span className={`${burger ? 'ml-14 w-48' : 'ml-14'}`} />
        <div
          onClick={() => setModal(false)}
          className='cursor-pointer absolute'
          style={!burger ? { top: '3rem', right: '2.5rem' } : { top: '3rem', right: '14rem' }}
        >
          <Tic />
        </div>
      </Fade>
    </div>
  )
}

const DomainCard = ({ title, body, id }) => {
  const [image, imageChange] = useState()

  const changeImageHandler = (e) => {
    let selected = e.target.files
    if (selected && selected[0]) {
      let reader = new FileReader()

      reader.onload = (e) => {
        imageChange(e.target.result)
      }
      reader.readAsDataURL(selected[0])
    }
  }

  return (
    <div className='flex items-center mt-14' style={{ width: '40.625rem' }}>
      <div className='border-dashed border-2 rounded-lg mr-8' style={{ borderColor: '#449DA7' }}>
        <input type='file' className='hidden' id={id} name={id} accept='image/*' onChange={changeImageHandler} />
        <label
          className={`cursor-pointer flex flex-col rounded-lg items-center justify-center text-sm ${
            image ? '' : ' pt-12 pb-12 pl-8 pr-8 '
          } hover:bg-ligther-gray`}
          style={{ color: '#449DA7', transition: '0.2s easy-in-out' }}
          htmlFor={id}
        >
          {image ? (
            <img src={image} alt='image' className='rounded-lg' style={{ width: '8.963rem', height: '9.25rem' }} />
          ) : (
            <div className='flex flex-col items-center justify-center'>
              <img src={upload} className='w-8 h-8' alt='upload' />
              <p className='font-normal text-xs'>Upload Logo</p>
            </div>
          )}
        </label>
      </div>
      <div style={{ width: '29.25rem' }}>
        <p className='text-base font-bold relative left-2'>{title}</p>
        <p className='text-sm font-medium'>{body}</p>
      </div>
    </div>
  )
}

const resultDot = [
  { dot: 'done', text: 'Getting Started' },
  { dot: 'done', text: 'Address' },
  { dot: 'done', text: 'Choose a plan' },
  { dot: 'active', text: 'Domain Preferences' },
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

const Search = () => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.31 15.9L20.71 19.29C20.8993 19.4778 21.0058 19.7334 21.0058 20C21.0058 20.2666 20.8993 20.5222 20.71 20.71C20.5222 20.8993 20.2666 21.0058 20 21.0058C19.7334 21.0058 19.4778 20.8993 19.29 20.71L15.9 17.31C14.5025 18.407 12.7767 19.0022 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19.0022 12.7767 18.407 14.5025 17.31 15.9ZM11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5Z'
        fill='#6D7175'
      />
    </svg>
  )
}

const Arrow = () => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9.99981 18.9999C9.76616 19.0004 9.53972 18.919 9.35981 18.7699C9.1553 18.6004 9.02666 18.3564 9.00227 18.0919C8.97788 17.8274 9.05975 17.564 9.22981 17.3599L13.7098 11.9999L9.38981 6.62994C9.22204 6.42335 9.14354 6.1584 9.17169 5.89376C9.19985 5.62912 9.33233 5.38662 9.53981 5.21994C9.74898 5.03591 10.0254 4.94747 10.3026 4.97594C10.5797 5.00442 10.8324 5.14722 10.9998 5.36994L15.8298 11.3699C16.1331 11.7389 16.1331 12.2709 15.8298 12.6399L10.8298 18.6399C10.6263 18.8854 10.318 19.0191 9.99981 18.9999Z'
        fill='#CFD0D7'
      />
    </svg>
  )
}
