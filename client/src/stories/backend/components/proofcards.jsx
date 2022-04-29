import React from 'react'
import PropTypes from 'prop-types'

import ProofCard from '../../proofcard/proofcard.jsx'

export default function ProofCards() {
  return (
    <div>
      <ProofCard title='Proof of Identity' num={0} nameCard='Passport' approved='approved' />
      <ProofCard title='Transfer Certificate' num={1} nameCard='School Certificate' approved='Send For Approval' />
      <ProofCard title='Age Proof' num={2} nameCard='Date of Birth Certificate ' approved='Rejected' />
      <ProofCard num={3} approved='Upload' />
    </div>
  )
}

ProofCards.propTypes = {
  /**  @param Type An array of objects.
   * @param Object Keys for objects - title: string, image: string, nameCard: string, approved: string, upload: object
   * @param upload Keys for object - documents: array of objects, image: string
   * @param documents Keys for object - value: string, label: string
   * @param approved Key variations - approved, Send For Approval, Rejected, Upload
   * @param Example [
  {
    title: 'Proof of Identity',
    image: 'https://localhost:8080/...',
    nameCard: 'Passport',
    approved: 'approved'
  },
   {
    title: 'Transfer Certificate',
    image: 'https://localhost:8080/...',
    nameCard: 'School Certificate',
    approved: 'Send For Approval'
  }, {
    title: 'Age Proof',
    image: 'https://localhost:8080/...',
    nameCard: 'Date of Birth Certificate',
    approved: 'Rejected'
  }, {
    title: '',
    image: '',
    nameCard: '',
    approved: 'Upload',
    ulpoad: {
      image: '',
      documents: [
    { value: 'Select Document', label: 'Select Document' },
    { value: 'Passport', label: 'Passport' },
    { value: 'Certificate', label: 'Certificate' }
  ]
    }
  }
]
   **/
  data: PropTypes.array
}
