import React from 'react'

import BloomHeader from '@components/bloomingdale/header/header'
import BloomCard from '@components/bloomingdale/card/card'

import './welcome.scss'

const BloomWelcome = () => {
  return (
    <>
      <BloomHeader />
      <div className='bloom-welcome'>
        <div className='bloom-welcome-intro'>
          <h1 className='bloom-welcome-intro_title'>
            Welcome to <span>Bloomingdale international school</span>
          </h1>
          <h4 className='bloom-welcome-intro_subtitle'>Your first ster for your child's future</h4>
        </div>
        <div className='bloom-welcome-cards'>
          <BloomCard title='Enquiry' desc='registration of interest' btnName='Submit ROI' />
          <BloomCard title='Apply now' desc='apply for admission' btnName='Submit Application' />
          <BloomCard title='campus tour' desc='visit our school' btnName='Schedule a Tour' />
        </div>
      </div>
    </>
  )
}

export default BloomWelcome
