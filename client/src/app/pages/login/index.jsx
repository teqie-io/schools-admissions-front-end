import React from 'react'
import { useParams } from 'react-router-dom'
import clsx from 'clsx'

import { AccoutType, ForgotPassword, OTPLogin } from '@components/login'
import './login.scss'

export default function Login({ burger }) {
  const { id } = useParams()

  const renderComponents = [
    {
      linkId: 'type',
      componentRender: (key) => <AccoutType key={key} />
    },
    {
      linkId: 'forgot',
      componentRender: (key) => <ForgotPassword key={key} />
    },
    {
      linkId: 'otp',
      componentRender: (key) => <OTPLogin key={key} />
    }
  ]

  return (
    <div className={clsx('login pr-24', burger ? 'pl-69' : 'pl-32')}>
      {renderComponents.map((item, key) => {
        return id === item.linkId && item.componentRender(key)
      })}
    </div>
  )
}

export const Logo = ({ fill }) => {
  return (
    <svg width='74' height='25' viewBox='0 0 74 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M15.6136 8.40909H22C21.5114 3.73864 17.2727 0.40909 11.7727 0.40909C5.5 0.40909 0.409091 4.72727 0.409091 12.4091C0.409091 19.7727 5.02273 24.3182 11.8182 24.3182C17.9091 24.3182 22.2727 20.5909 22.2727 14.2273V11H11.9545V15.5H16.1818C16.125 17.5227 14.6932 18.8182 11.8636 18.8182C8.59091 18.8182 6.90909 16.4091 6.90909 12.3182C6.90909 8.28409 8.72727 5.90909 11.9091 5.90909C13.8864 5.90909 15.2273 6.81818 15.6136 8.40909ZM31.5369 0.727272H25.2188V24H31.5369V0.727272ZM34.5312 24H40.8494V18L42.9403 15.2727L48.1676 24H55.7131L47.6676 11.0909L55.5312 0.727272H48.1676L41.1676 10.1364H40.8494V0.727272H34.5312V24ZM63.7244 0.727272H57.4062V24H63.7244V0.727272ZM73.0369 0.727272H66.7188V24H73.0369V0.727272Z'
        fill={fill}
      />
    </svg>
  )
}
