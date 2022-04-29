import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import clsx from 'clsx'

import { dataLinks } from '@entities/routes'
import { NavLinks } from '@components/header'
import CompanyTabs from '@stories/companytabs/companytabs.jsx'
import './communication.scss'

const dataTypes = ['Active', 'Disabled']

const dataCard = [
  {
    title: 'New Enquiry',
    body: 'This template can be used when a new enquiry is recived',
    type: 'Active',
    active: 'Active',
    social: ['message', 'phone', 'messenger']
  },
  {
    title: 'Campus tour Conformation',
    body: 'This is a system default email sent to parents ',
    type: 'System',
    active: 'Draft',
    social: ['message', 'messenger']
  }
]

const Communication = ({ burger }) => {
  const [typeState, setTypeState] = useState(dataTypes && dataTypes[0])
  const [cardRender, setCardRender] = useState(dataCard)

  return (
    <div className={clsx('communication ml-20 pr-6', burger ? 'pl-0 1400px:pl-69  2xl:pl-69' : 'pl-0 1400px:pl-20')}>
      <NavLinks urls={dataLinks.communicationEditLinks} />
      <div className='w-full flex items-center justify-between'>
        <h1 className='namepage'>Communication Templates</h1>
        <button
          className='bg-main-blue text-white pt-2.5 pb-2.5 w-36 rounded'
          onClick={() =>
            setCardRender([
              ...cardRender,
              {
                title: 'New Template',
                body: ' ',
                type: 'Active',
                active: 'Draft',
                social: []
              }
            ])
          }
        >
          Add Template
        </button>
      </div>
      <p style={{ color: ' rgba(0, 0, 0, 0.6)' }}>
        Setup the templates for frequently sent emails. Only finished templates will be visible in your Email Panel
      </p>
      <div className='flex mt-5 mb-10'>
        <CompanyTabs types={dataTypes} setTypeState={setTypeState} typeState={typeState} />
      </div>
      <div className='w-full'>
        {cardRender.map((item, key) => (
          <CommunicationCard
            title={item.title}
            ket={key}
            body={item.body}
            type={item.type}
            active={item.active}
            social={item.social}
          />
        ))}
      </div>
    </div>
  )
}

const CommunicationCard = ({ title, body, type, active, social }) => {
  const history = useHistory()

  return (
    <div
      onClick={() => history.push('/templates/edit-template')}
      className='w-full flex items-center justify-between cursor-pointer pl-6 pr-6 rounded-lg border border-white hover:border-third-gray h-20 mb-5'
    >
      <div style={{ color: '#333333', width: 500 }}>
        <p className='text-lg font-bold'>{title}</p>
        <p className='text-sm'>{body}</p>
      </div>
      <div className='flex items-center'>
        <div className='mr-10' style={{ color: '#333333' }}>
          <p className='text-sm font-bold'>Type</p>
          <p className='text-lg font-bold'>{type}</p>
        </div>
        <div
          className='rounded-3xl pl-2 pr-2'
          style={active === 'Active' ? { background: '#54D62C' } : { background: '#FFC107' }}
        >
          {active}
        </div>
      </div>
      <div className='flex items-center'>
        <div className='flex items-center w-28'>
          {social.map((item, key) => (
            <React.Fragment>
              {item === 'message' && <Message />}
              {item === 'phone' && <Phone />}
              {item === 'messenger' && <Messenger />}
            </React.Fragment>
          ))}
        </div>
        <button>
          <Crumbs />
        </button>
        <button>
          <Arrow />
        </button>
      </div>
    </div>
  )
}

const Crumbs = () => {
  return (
    <svg
      width='24'
      className='mr-10 ml-5'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.3334 7.33333C13.3334 8.06971 12.7365 8.66667 12.0001 8.66667C11.2637 8.66667 10.6667 8.06971 10.6667 7.33333C10.6667 6.59695 11.2637 6 12.0001 6C12.7365 6 13.3334 6.59695 13.3334 7.33333ZM13.3334 12C13.3334 12.7364 12.7365 13.3333 12.0001 13.3333C11.2637 13.3333 10.6667 12.7364 10.6667 12C10.6667 11.2636 11.2637 10.6667 12.0001 10.6667C12.7365 10.6667 13.3334 11.2636 13.3334 12ZM12.0001 18C12.7365 18 13.3334 17.403 13.3334 16.6667C13.3334 15.9303 12.7365 15.3333 12.0001 15.3333C11.2637 15.3333 10.6667 15.9303 10.6667 16.6667C10.6667 17.403 11.2637 18 12.0001 18Z'
        fill='#637381'
      />
      <rect x='0.5' y='0.5' width='23' height='23' stroke='#E7EAEE' />
    </svg>
  )
}

const Arrow = () => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M8.55 2.5L7 4.05L14.95 12L7 19.95L8.55 21.5L18 12L8.55 2.5Z' fill='#2E3338' />
    </svg>
  )
}

const Messenger = () => {
  return (
    <svg
      width='24'
      className='mr-1.5 ml-1.5'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.7227 14.0602C16.4673 13.9289 15.1946 13.3055 14.9579 13.2211C14.7212 13.132 14.5477 13.0898 14.3767 13.3523C14.2032 13.6125 13.711 14.1914 13.5563 14.3672C13.4063 14.5406 13.254 14.5617 12.9985 14.4328C11.4798 13.6734 10.4837 13.0781 9.48291 11.3602C9.21806 10.9031 9.74775 10.9359 10.2423 9.94922C10.3267 9.77578 10.2845 9.62813 10.2188 9.49688C10.1532 9.36563 9.63759 8.09531 9.42197 7.57734C9.21338 7.07344 8.99775 7.14375 8.84072 7.13437C8.69072 7.125 8.51963 7.125 8.34619 7.125C8.17275 7.125 7.89385 7.19063 7.65713 7.44609C7.42041 7.70625 6.75244 8.33203 6.75244 9.60234C6.75244 10.8727 7.67822 12.1031 7.80478 12.2766C7.93603 12.45 9.62588 15.0563 12.2204 16.1789C13.861 16.8867 14.5032 16.9477 15.3235 16.8258C15.8227 16.7508 16.8516 16.2023 17.0649 15.5953C17.2782 14.9906 17.2782 14.4727 17.2149 14.3648C17.1516 14.25 16.9782 14.1844 16.7227 14.0602Z'
        fill='#27C59A'
      />
      <path
        d='M21.6845 7.93125C21.1548 6.67266 20.3954 5.54297 19.4275 4.57266C18.4595 3.60469 17.3298 2.84297 16.0689 2.31563C14.7798 1.77422 13.4111 1.5 12.0001 1.5H11.9533C10.5329 1.50703 9.15716 1.78828 7.86341 2.34141C6.6142 2.87578 5.49388 3.63516 4.53529 4.60312C3.5767 5.57109 2.82435 6.69609 2.30404 7.95C1.76498 9.24844 1.4931 10.6289 1.50013 12.0492C1.50716 13.6758 1.89623 15.2906 2.62513 16.7344V20.2969C2.62513 20.8922 3.10795 21.375 3.70326 21.375H7.2681C8.71185 22.1039 10.3267 22.493 11.9533 22.5H12.0025C13.4064 22.5 14.7681 22.2281 16.0501 21.6961C17.304 21.1734 18.4314 20.4234 19.397 19.4648C20.365 18.5063 21.1267 17.3859 21.6587 16.1367C22.2119 14.843 22.4931 13.4672 22.5001 12.0469C22.5072 10.6195 22.2306 9.23438 21.6845 7.93125ZM18.1431 18.1969C16.5001 19.8234 14.3204 20.7188 12.0001 20.7188H11.9603C10.547 20.7117 9.1431 20.3602 7.90326 19.6992L7.70638 19.5938H4.40638V16.2938L4.30091 16.0969C3.63998 14.857 3.28841 13.4531 3.28138 12.0398C3.27201 9.70312 4.16498 7.50937 5.80326 5.85703C7.4392 4.20469 9.62591 3.29062 11.9626 3.28125H12.0025C13.1744 3.28125 14.3111 3.50859 15.3822 3.95859C16.4275 4.39687 17.365 5.02734 18.1712 5.83359C18.9751 6.6375 19.6079 7.57734 20.0462 8.62266C20.5009 9.70547 20.7283 10.8539 20.7236 12.0398C20.7095 14.3742 19.7931 16.5609 18.1431 18.1969Z'
        fill='#27C59A'
      />
    </svg>
  )
}

const Phone = () => {
  return (
    <svg
      width='24'
      className='mr-1.5 ml-1.5'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_2144_23639)'>
        <path
          d='M16.5 1.5C16.8978 1.5 17.2794 1.65804 17.5607 1.93934C17.842 2.22064 18 2.60218 18 3V21C18 21.3978 17.842 21.7794 17.5607 22.0607C17.2794 22.342 16.8978 22.5 16.5 22.5H7.5C7.10218 22.5 6.72064 22.342 6.43934 22.0607C6.15804 21.7794 6 21.3978 6 21V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H16.5ZM7.5 0C6.70435 0 5.94129 0.316071 5.37868 0.87868C4.81607 1.44129 4.5 2.20435 4.5 3V21C4.5 21.7956 4.81607 22.5587 5.37868 23.1213C5.94129 23.6839 6.70435 24 7.5 24H16.5C17.2956 24 18.0587 23.6839 18.6213 23.1213C19.1839 22.5587 19.5 21.7956 19.5 21V3C19.5 2.20435 19.1839 1.44129 18.6213 0.87868C18.0587 0.316071 17.2956 0 16.5 0L7.5 0Z'
          fill='#27C59A'
        />
        <path
          d='M12 21C12.3978 21 12.7794 20.842 13.0607 20.5607C13.342 20.2794 13.5 19.8978 13.5 19.5C13.5 19.1022 13.342 18.7206 13.0607 18.4393C12.7794 18.158 12.3978 18 12 18C11.6022 18 11.2206 18.158 10.9393 18.4393C10.658 18.7206 10.5 19.1022 10.5 19.5C10.5 19.8978 10.658 20.2794 10.9393 20.5607C11.2206 20.842 11.6022 21 12 21Z'
          fill='#27C59A'
        />
      </g>
      <defs>
        <clipPath id='clip0_2144_23639'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

const Message = () => {
  return (
    <svg
      width='28'
      className='mr-1.5 ml-1.5'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M25.6666 6.99984C25.6666 5.7165 24.6166 4.6665 23.3333 4.6665H4.66659C3.38325 4.6665 2.33325 5.7165 2.33325 6.99984V20.9998C2.33325 22.2832 3.38325 23.3332 4.66659 23.3332H23.3333C24.6166 23.3332 25.6666 22.2832 25.6666 20.9998V6.99984ZM23.3333 6.99984L13.9999 12.8332L4.66659 6.99984H23.3333ZM23.3333 20.9998H4.66659V9.33317L13.9999 15.1665L23.3333 9.33317V20.9998Z'
        fill='#27C59A'
      />
    </svg>
  )
}

export default Communication
