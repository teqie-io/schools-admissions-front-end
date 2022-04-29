import React from 'react'

import '../../app/components/admission-module/application/information/information.scss'
import ProofCards from './components/proofcards.jsx'

export default {
  title: 'Components/Application Documents',
  component: ProofCards,
  argTypes: {}
}

export const Description = () => (
  <div className='information-field'>
    <ProofCards />
  </div>
)
