import React from 'react'
import Zoom from 'react-reveal/Zoom'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import clsx from 'clsx'

export default function Options({ visible, onClosed }) {
  return (
    <Zoom duration={300} when={visible}>
      <div
        className={clsx('profile-box-card', 'absolute pt-4 pb-4 top-0 right-36', visible ? '' : 'hidden')}
        style={{ width: '12.5rem', height: '10.625rem' }}
      >
        <div className='flex flex-col'>
          {dataLinks.map((item, key) => (
            <NavLink className='option-link' key={key} to={item.link}>
              <div className='rounded-full border w-6 h-6 flex items-center justify-center mr-6'>
                {item.label === 'Add Enquiry' ? <Enquiry /> : item.label === 'Add Repair' ? <Repair /> : <Dollar />}
              </div>
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </Zoom>
  )
}

Options.propTypes = {
  visible: PropTypes.bool,
  onCLosed: PropTypes.func
}

const dataLinks = [
  { link: '/', label: 'Add Enquiry' },
  { link: '/', label: 'Add Repair' },
  { link: '/', label: 'Add Order' }
]

const Enquiry = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' width='1em' height='1em' viewBox='0 0 24 24'>
      <path
        d='M18.38 6.37c-.7 0-1.31.21-1.91.41c-.7-1.21-2.01-2.01-3.42-2.01c-1.1 0-2.1.5-2.81 1.2c-.8-1-2.01-1.71-3.41-1.71C4.5 4.26 2.5 6.17 2.5 8.5c0 .59.21 1.19.41 1.79A3.678 3.678 0 0 0 1 13.5c0 2 1.61 3.72 3.62 3.72c.3 0 .6 0 .8-.1c.4 1.51 1.91 2.62 3.72 2.62c1.7 0 3.11-1.01 3.61-2.42c.51.21 1.01.41 1.51.41c1.31 0 2.51-.73 3.11-1.81c.31.08.63.08.91.08c2.61 0 4.72-2.09 4.72-4.8c.1-2.7-2-4.83-4.62-4.83z'
        fill='#db909a'
      ></path>
    </svg>
  )
}

const Repair = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' width='1em' height='1em' viewBox='0 0 20 20'>
      <g fill='none'>
        <path
          d='M9 6.5a4.5 4.5 0 0 1 6.352-4.102a.5.5 0 0 1 .148.809L13.207 5.5L14.5 6.793L16.793 4.5a.5.5 0 0 1 .81.147a4.5 4.5 0 0 1-5.207 6.216L6.03 17.311a2.357 2.357 0 0 1-3.374-3.293L9.082 7.36A4.52 4.52 0 0 1 9 6.5zM13.5 3a3.5 3.5 0 0 0-3.387 4.386a.5.5 0 0 1-.124.473l-6.613 6.854a1.357 1.357 0 0 0 1.943 1.896l6.574-6.66a.5.5 0 0 1 .512-.124a3.5 3.5 0 0 0 4.521-4.044l-2.072 2.073a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.708l2.072-2.072A3.516 3.516 0 0 0 13.5 3z'
          fill='#80afe4'
        ></path>
      </g>
    </svg>
  )
}

const Dollar = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' width='1em' height='1em' viewBox='0 0 24 24'>
      <path
        d='M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15z'
        fill='#d6818d'
      ></path>
    </svg>
  )
}
